import './App.css'
import Header from './components/Layout/Header'
import Products from './components/Product/Products'

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Products />
      </div>
    </>
  )
}

export default App
