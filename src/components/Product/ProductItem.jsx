{/* https://dummyimage.com/800x480/1500ff/000011 / */}
import { Card, Button } from 'react-bootstrap'
import ProductItemForm from './ProductItemForm'

function ProductItem({name, description}) {
    return (
    <Card style={{ width: '18rem', margin: "10px" }}>
      <Card.Img variant="top" src="https://dummyimage.com/800x480/1500ff/000011" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {/* ProductItemForm */}
        <ProductItemForm />
      </Card.Body>
    </Card>
    )
}   

export default ProductItem