# Démarrer le backend dans un nouveau processus
Start-Process -FilePath "powershell" -ArgumentList "-Command cd ./back; docker-compose up"

# Démarrer le frontend dans un nouveau processus
Start-Process -FilePath "powershell" -ArgumentList "-Command cd ./front; pnpm dev"