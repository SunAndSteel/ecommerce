import { Row, Button } from "react-bootstrap"


function ProductItemForm() {
    return (
        <>
            <label for="prix"><input type="number" id="prix" name="prix" min="1" /><Button variant="primary">Add</Button></label>
        </>
    )
}

export default ProductItemForm