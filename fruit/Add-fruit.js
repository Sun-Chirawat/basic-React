import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import './App-fruit.css';
import Fruit from "../components/Fruit";
import Typograhy from "@mui/material/Typography"
import { TextField, Button, Grid } from '@mui/material';
const Add = () => {
    const navigate = useNavigate();

    const [fruits, setFruits] = useState([]);
    const [name, setName] = useState(null);

    // state variable to hide/show add dialog
    // const [addHidden, setAddHidden] = useState(true);
    // const [editHidden, setEditHidden] = useState(true);

    // state variable for new item
    const [newFruit, setNewFruit] = useState([]);

    // state variable to keep selected fruit index in array and fruit name
    // const [fruitIndex, setFruitIndex] = useState(0);
    // const [editFruitName, setEditFruitName] = useState('');
    // ========= Add item =========

    const addFruit = () => {
        // console.log(newFruit);
        // clone fruit array
        let newFruits = [...fruits];

        // create object of new fruit
        const item = { name: newFruit, image: 'apple.png', id: newFruits.length + 101 };
        // add new item to array
        newFruits.push(item);
        console.log(newFruit);

        let bodyContent = JSON.stringify({
            "name": newFruit,
            "image": "apple.png",
            "id": newFruit.length + 101
        });

        fetch("http://localhost:9000/fruits/",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: bodyContent,

            }).then(response => {
                if (response.ok) {
                    return response.json();

                }
                throw Error('Server access denies!');

            }
            )
            // .then(json => console.log(json.name))
            .then(json => setName(json.name))
            .catch((err) => console.log(err))
            ;

        // const test = [...fruits, { name: newFruit, image: 'apple.png', id: newFruits.length + 101 }];
        // update state

        setFruits(newFruits);
        setNewFruit('');
        navigate(-1);
    }

    return (
        <>
            <h1>Add page</h1>
            {/* <Button variant="contained" color="success" onClick={() => setAddHidden(!addHidden)} id="btnAdd">
                    Add
                </Button> */}
            {/* ========= Add Dialog ========= */}
            {
                <>
                    <TextField id="outlined-basic" label="Enter fruit..." variant="outlined" size="small" value={newFruit}
                        onChange={(e) => setNewFruit(e.target.value)}
                        required />
                    <Button variant="outlined" color="success" onClick={addFruit}>
                        OK
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => navigate(-1)}>
                        Cancel
                    </Button>

                </>
            }
        </>
    );
}

export default Add;