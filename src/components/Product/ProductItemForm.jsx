import { Button } from "react-bootstrap"


function ProductItemForm() {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <label htmlFor="prix" style={{fontSize: "0.8rem"}}><input type="number" id="prix" name="prix" min="1" style={{marginRight: "10px"}}/></label>
            <Button variant="primary">Add</Button>
        </div>
    )
}

export default ProductItemForm