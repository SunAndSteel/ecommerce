import { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import CartModal from "../Cart/CartModal";
import cartIcon from "../../assets/cart.svg";

function HeaderCartButton() {
  const [showModal, setShowModal] = useState(false); 

  const handleToggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Button variant="primary" onClick={handleToggleModal}>
        Your cart <img style={{ paddingRight: "0px" }} src={cartIcon} alt="" />
        <Badge bg="secondary" style={{ marginLeft: "5px" }}>3</Badge>
      </Button>
      <CartModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default HeaderCartButton;
