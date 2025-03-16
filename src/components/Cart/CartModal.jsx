import { Button, Modal } from "react-bootstrap";
import testList from "../Product/testList";

function CartModal({ open, onClose }) {
  

  {/* BUG : Total amount incorrect */}
  const totalAmount = testList.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <Modal show={open} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-striped table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th scope="col">Ref</th>
              <th scope="col">Name</th>
              <th scope="col">Price (€)</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {testList.map((product) => (
              <tr key={product._id}>
                <td>{product.brand}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 className="text-end fw-bold">Total Amount: {totalAmount}€</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary">Order</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
