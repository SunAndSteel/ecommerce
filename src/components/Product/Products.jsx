import { Container, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';
import { testList } from '../Product/testList';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(testList);
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <ProductItem 
            key={product._id} 
            name={product.name} 
            price={product.price}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Products;
