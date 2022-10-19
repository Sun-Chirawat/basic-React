import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState, useEffect } from "react";

const App = () => {
    const [product, setProduct] = useState([]);
    const [total, setTotal] = useState([]);
    const [select, setSelect] = useState([]);
    // const rows = [
    //     { "id": 11, "name": "Shirt", "price": 200, "status": 0, "sale": 20 },
    //     { "id": 22, "name": "Shoe", "price": 350, "status": 1, "sale": 30 },
    //     { "id": 33, "name": "Hat", "price": 150, "status": 1, "sale": 25 },
    // ];

    useEffect(() => {
        fetch('http://localhost:9000/product')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json => setProduct(json))

    }, [])


    const cols = [
        { field: "name", headerName: "Product", width: 150, },
        { field: "price", headerName: "Price" },
        { field: "sale", headerName: "Sale" },
        // {
        //     field: "status",
        //     headerName: "Status",
        //     valueFormatter: (params) => {
        //         if (params.value == 0) {
        //             return "None";
        //         }
        //         else {
        //             return "Okay";
        //         }
        //     }
        // },
        {
            field: "status",
            headerName: "Status",
            renderCell: (params) => {
                if (params.value === 1) {
                    return <CheckCircleIcon color="success" />
                }
                else {
                    return <CancelIcon color="error" />;
                }

            }
        },

        {
            field: "net", headerName: "Net Price",
            valueGetter: (params) => {
                return params.row.price - params.row.sale;
            }
        },
        {
            field: "sum", headerName: "Total",
            valueGetter: (params) => {
                console.log(select);
              
                return params.row.net;
            }
        },
        {
            field: "actions",
            type: "actions",
            width: 200,
            headerName: "Action",
            getActions: (params) => [
                <Button variant="outlined" color="info">Edit</Button>,
                <Button variant="outlined" color="error" onClick={() => alert(params.id)}>Delete</Button>,
            ]
        },

    ];

    return (
        <>
            {/* <CheckCircleIcon color="success" /> */}
            <Button variant="contained" color="success">Add</Button>
            <Button variant="contained" color="info">Choose</Button>
            <div style={{ display: 'flex', height: 300 }}>
                <div style={{ flexGrow: 1 }}>

                    <DataGrid

                        rows={product}
                        columns={cols}
                        checkboxSelection
                        disableSelectionOnClick                       
                        onSelectionModelChange={(newSelection) => {
                            console.log(newSelection);
                            setSelect(newSelection);

                        }}
                    />

                </div>

            </div>
        </>
    )

}

export default App;