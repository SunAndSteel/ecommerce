import { Container, Row } from 'react-bootstrap'
import ProductItem from './ProductItem'

function Products() {
    return (
      <>
        <Container>
            <Row>
              <ProductItem name={"Produit 1"} description={"Descrption du produit 1"} price={100}/>
              <ProductItem name={"Produit 2"} description={"Descrption du produit 2"} price={123}/>
            </Row>
        </Container>
      </>
    )
}

export default Products