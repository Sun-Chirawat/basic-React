import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import './App-fruit.css';
import Fruit from "../components/Fruit";
import Typograhy from "@mui/material/Typography"
import { TextField, Button, Grid } from '@mui/material';


function App() {

    const [fruits, setFruits] = useState([]);


    // state variable to hide/show add dialog
    const [addHidden, setAddHidden] = useState(true);
    const [editHidden, setEditHidden] = useState(true);

    // state variable for new item
    const [newFruit, setNewFruit] = useState('');

    // state variable to keep selected fruit index in array and fruit name
    const [fruitIndex, setFruitIndex] = useState(0);
    const [editFruitName, setEditFruitName] = useState('');

    // ========= Delete item ========= Fix
    const deleteFruit = (id) => {

        fetch("http://localhost:9000/fruits/" + id, {
            method: "DELETE"
        });

        const newFruits = fruits.filter((fruit) => fruit.id !== id);
        setFruits(newFruits);

    }

    // ========= Add item =========

    const addFruit = () => {
        // console.log(newFruit);
        // clone fruit array
        let newFruits = [...fruits];

        // create object of new fruit
        const item = { name: newFruit, image: 'apple.png', id: newFruits.length + 101 };
        // add new item to array
        newFruits.push(item);

       

        // const test = [...fruits, { name: newFruit, image: 'apple.png', id: newFruits.length + 101 }];
        // update state

        setFruits(newFruits);
        // setNewFruit('');
    }

    // ========= Prepare to Edit item =========
    const beforeEdit = (index, fruitName) => {
        setEditHidden(!editHidden);
        setFruitIndex(index);
    }

    // ========= Edit item =========
    const editFruit = () => {
        let newFruits = [...fruits];
        newFruits[fruitIndex].name = editFruitName;
        setFruits(newFruits);
        setEditHidden(true);
    }

    // Load data
    useEffect(() => {
        fetch('http://localhost:9000/fruits')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json => setFruits(json))

    }, [])

    const navigate = useNavigate();

    return (
        <>
            <Typograhy style={{ fontWeight: 600 }} variant="h3" color="blue" align="center">Fruit Shop management system
            </Typograhy>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
            // alignItems="flex-start"
            >

                <Button variant="contained" color="success" onClick={() => navigate('/add')} id="btnAdd">
                    Add
                </Button>
                {/* ========= Add Dialog ========= */}
                {!addHidden &&
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
                }
                {/* ============================== */}
            </Grid>

            {
                fruits.map((fruit, index) => {
                    return (
                        // Fruit components
                        <Fruit fruit={fruit} index={index} deleteFruit={deleteFruit} beforeEdit={beforeEdit} />
                    )
                })
            }
            {/* ========= Edit Dialog ========= */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ pt: 1 }}
            >
                <div hidden={editHidden}>
                    <TextField id="outlined-basic" label={editFruitName} variant="outlined" size="small" value={editFruitName}
                        onChange={(e) => setEditFruitName(e.target.value)}
                        required
                    />
                    <Button variant="outlined" color="warning" onClick={editFruit}>
                        Edit
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => { setEditHidden(!editHidden); setEditFruitName('') }}>
                        Cancel
                    </Button>
                </div>
            </Grid>
            {/* ============================== */}
        </>
    );
}


export default App;