{/* https://dummyimage.com/800x480/1500ff/000011 / */}
import { Card, Button } from 'react-bootstrap'
import ProductItemForm from './ProductItemForm'

function ProductItem({name, price}) {
    return (
    <Card style={{ width: '18rem', margin: "10px" }}>
      <Card.Img variant="top" src="https://dummyimage.com/800x480/1500ff/000011" alt="" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
            <Card.Text>{price} €
              <ProductItemForm />
            </Card.Text>
      </Card.Body>
    </Card>
    )
}   

export default ProductItem