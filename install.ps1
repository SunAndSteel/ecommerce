# Remove any existing Docker installations
foreach ($package in @("docker", "docker-client", "docker-client-latest", "docker-common", "docker-latest", "docker-latest-logrotate", "docker-logrotate", "docker-selinux", "docker-engine-selinux", "docker-engine")) {
    if (Get-Package -Name $package -ErrorAction SilentlyContinue) {
        Uninstall-Package -Name $package -Force
    }
}

# Install Docker Desktop for Windows
# Note: PowerShell can't directly install Docker like dnf in Linux
# Instead, we'll provide download instructions
Write-Host "Please install Docker Desktop for Windows from: https://www.docker.com/products/docker-desktop/" -ForegroundColor Yellow
Write-Host "After installation, please restart your computer and then continue with this script." -ForegroundColor Yellow
Read-Host "Press Enter to continue once Docker is installed"

# Test Docker installation
try {
    docker run hello-world
}
catch {
    Write-Host "Docker is not running or not installed correctly. Please ensure Docker Desktop is running." -ForegroundColor Red
    exit 1
}

# Create Portainer volume and start container
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts

# Define the directory and file path
$DIR = "./docker/api"
$FILE = "$DIR/docker-compose.yaml"
$ENV_FILE = "$DIR/test.env"

# Create the directory if it doesn't exist
if (-not (Test-Path $DIR)) {
    New-Item -ItemType Directory -Path $DIR -Force
}

# Set default values for environment variables
$DEFAULT_CLOUD_NAME = "dtthivula"
$DEFAULT_CLOUD_API_KEY = "test"
$DEFAULT_CLOUD_API_SECRET = "test"
$DEFAULT_CLOUD_PROJECT = "test"

# Prompt the user for environment variables with defaults
Write-Host "Please enter the following details for your cloud service (defaults are provided):"
$CLOUD_NAME = Read-Host "CLOUD_NAME [$DEFAULT_CLOUD_NAME]"
if ([string]::IsNullOrWhiteSpace($CLOUD_NAME)) { $CLOUD_NAME = $DEFAULT_CLOUD_NAME }

$CLOUD_API_KEY = Read-Host "CLOUD_API_KEY [$DEFAULT_CLOUD_API_KEY]"
if ([string]::IsNullOrWhiteSpace($CLOUD_API_KEY)) { $CLOUD_API_KEY = $DEFAULT_CLOUD_API_KEY }

$CLOUD_API_SECRET = Read-Host "CLOUD_API_SECRET [$DEFAULT_CLOUD_API_SECRET]"
if ([string]::IsNullOrWhiteSpace($CLOUD_API_SECRET)) { $CLOUD_API_SECRET = $DEFAULT_CLOUD_API_SECRET }

$CLOUD_PROJECT = Read-Host "CLOUD_PROJECT [$DEFAULT_CLOUD_PROJECT]"
if ([string]::IsNullOrWhiteSpace($CLOUD_PROJECT)) { $CLOUD_PROJECT = $DEFAULT_CLOUD_PROJECT }

# Write the environment variables to test.env
@"
# Main Configurations
NODE_ENV=development
PORT=3000

# Database Configurations
DATABASE_CONNECTION=mongodb://root:test@mongodb:27017/
DATABASE_USERNAME=root
DATABASE_PASSWORD=test
DATABASE_PORT=27017

# JWT Configurations
JWT_SECRET=test
JWT_ACCESS_EXPIRATION_MINUTES=6000
JWT_REFRESH_EXPIRATION_DAYS=3
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=6000
JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=6000

# Cloudinary Configurations
CLOUD_NAME=$CLOUD_NAME
CLOUD_API_KEY=$CLOUD_API_KEY
CLOUD_API_SECRET=$CLOUD_API_SECRET
CLOUD_PROJECT=$CLOUD_PROJECT
"@ | Out-File -FilePath $ENV_FILE -Encoding utf8
Write-Host "Environment variables have been written to $ENV_FILE"

# Write the docker-compose.yaml content
@"
services:
  backend:
    build: 
      context: .
      dockerfile: Dockerfile
    restart: always
    ports:
      - 3000:3000  # Map port 3000 on the host to port 3000 in the container
    image: ecommerceapi:latest
    stdin_open: true
    env_file:
      - ./test.env  # Load environment variables from test.env

  mongodb:
    image: mongo
    restart: always
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root  # Set root username
      - MONGO_INITDB_ROOT_PASSWORD=test  # Set root password
    ports:
      - 27017:27017  # Map port 27017 on the host to port 27017 in the container
    volumes:
      - ./storage/db:/data/db  # Store MongoDB data in ./storage/db on the host
    stdin_open: true
    tty: true

  postwoman:
    image: liyasthomas/postwoman:latest
    restart: always
    ports:
      - 3001:3000  # Map port 3001 on the host to port 3000 in the container

volumes:
  db:
"@ | Out-File -FilePath $FILE -Encoding utf8
Write-Host "docker-compose.yaml has been created at $FILE"

# Change directory and run docker compose
Set-Location $DIR
docker compose up -d
Write-Host "Dockers pulling and starting"
Set-Location "../.."