import { Container, Row, Col } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';
// import { testList } from '../Product/testList'
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    const API_URL = 'http://localhost:3000/products'; // à changer

    setLoading(true);
    
    axios.get(`${API_URL}/products`)
      .then(response => {
        console.log('Products fetched:', response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        setLoading(false);
      });
    
      // setProducts(testList);
  }, []);
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

return (
    <Container>
      <Row>
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <Col md={4} key={product._id}>
              <ProductItem 
                id={product._id}
                name={product.name} 
                price={product.price}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Products;