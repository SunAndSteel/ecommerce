import { Container, Row } from 'react-bootstrap'
import ProductItem from './ProductItem'

function Products() {
    return (
      <>
        <Container>
            <Row>
              <ProductItem name={"Product 1"} description={"Descrption 1"} price={100}/>
              <ProductItem name={"Product 2"} description={"Descrption 2"} price={303}/>
            </Row>
        </Container>
      </>
    )
}

export default Products