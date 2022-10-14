import { Button, Stack, Grid, Card} from "@mui/material/";

const Fruit = ({ fruit, index, deleteFruit, beforeEdit }) => {
    return (
        // Fruit components

        <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{py:1}}
        >
            <Card variant="outlined" key={fruit.id} className="fruit-item">
                <img src={`img/${fruit.image}`} alt={fruit.name} />
                <h4>{fruit.name}</h4>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                // alignItems="flex-start"
                >
                    <Button variant="contained" color="warning" onClick={() => beforeEdit(index, fruit.name)}>
                        Edit
                    </Button>

                    <Button variant="contained" color="error" onClick={() => deleteFruit(fruit.id)} id="btnDel">
                        Delete
                    </Button>
                </Grid>
            </Card>
        </Stack>
    );
}

export default Fruit;