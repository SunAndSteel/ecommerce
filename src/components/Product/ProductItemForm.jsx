import { Row, Button } from "react-bootstrap"


function ProductItemForm() {
    return (
        <>
            <label for="prix"><input type="number" id="prix" name="prix"/><Button variant="primary">Ajouter</Button></label>
            
        </>
    )
}

export default ProductItemForm