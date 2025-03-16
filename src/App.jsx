import './App.css'
import Header from './components/Layout/Header'
import Products from './components/Product/Products'
import { Container, Row } from 'react-bootstrap'

function App() {
  return (
    <>
      <Header />
      <Container>
         <Products />
      </Container>
    </>
  )
}

export default App
