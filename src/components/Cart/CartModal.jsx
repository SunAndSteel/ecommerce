import { Button, Modal } from 'react-bootstrap';
import testList from '../Product/testList';

function CartModal({ open, onClose }) {
  return (
    <>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
                <tr>
                  <th scope="col"> Ref </th>
                  <th scope="col"> Name </th>
                  <th scope="col"> Price (€)</th>
                  <th scope="col"> Amount </th>
                </tr>
              </thead>
              <tbody>
                {testList.map((product) => (
                  <tr key={product._id}>
                    <td scope='row'>{product.brand}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
            <Button variant="primary" onClick={onClose}>
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )}

export default CartModal;
