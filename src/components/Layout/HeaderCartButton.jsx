import { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import CartModal from "../Cart/CartModal";

function HeaderCartButton() {
  const [showModal, setShowModal] = useState(false); 

  const handleToggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Button variant="primary" onClick={handleToggleModal}>
        Panier
        <Badge bg="secondary" style={{ marginLeft: "5px" }}>3</Badge>
      </Button>
      <CartModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default HeaderCartButton;
