import { useNavigate, Button } from "react-router-dom";
import { Route } from "react-router-dom";
const Add = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Add page</h1>
            {/* <Button variant="contained" color="success" onClick={() => setAddHidden(!addHidden)} id="btnAdd">
                    Add
                </Button> */}
            {/* ========= Add Dialog ========= */}
            {/* {!addHidden &&
                    <>
                        <TextField id="outlined-basic" label="Enter fruit..." variant="outlined" size="small" value={newFruit}
                            onChange={(e) => setNewFruit(e.target.value)}
                            required />
                        <Button variant="outlined" color="success" onClick={addFruit}>
                            OK
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => { setAddHidden(!addHidden); setNewFruit('') }}>
                            Cancel
                        </Button>

                    </>
                } */}
        </>
    );
}

export default Add;