import { Container, Row } from 'react-bootstrap'
import ProductItem from './ProductItem'

function Products() {
    return (
      <>
        <Container>
            <Row>
              <ProductItem />
              <ProductItem />
            </Row>
        </Container>
      </>
    )
}

export default Products