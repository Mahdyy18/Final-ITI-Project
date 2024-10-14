import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { AddBox, Edit, DeleteOutline, FirstPage, LastPage, ChevronLeft, ChevronRight, Search, Clear, Check, Close } from '@material-ui/icons';
import './productList.css';

const productList = [
    { id: 1, name: "Sofa", image: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600", price: 300, available: true },
    { id: 2, name: "Dining Table", image: "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600", price: 500, available: false },
    { id: 3, name: "Chair", image: "https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg?auto=compress&cs=tinysrgb&w=600", price: 100, available: true },
    { id: 4, name: "Bed", image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600", price: 400, available: true },
];

function App() {
    const [data, setData] = useState(productList);

    const columns = [
        { title: "Product ID", field: "id", editable: false },
        { 
            title: "Product Image", 
            field: "image",
            render: rowData => <img src={rowData.image} alt={rowData.name} className="productImage" />
        },
        { 
            title: "Product Name", 
            field: "name"
        },
        { 
            title: "Price", 
            field: "price", 
            type: "numeric",
            render: rowData => <div>{rowData.price} &nbsp; </div> 
        },
        { 
            title: "Available", 
            field: "available",
            lookup: { true: 'Available', false: 'Not Available' }
        }
    ];

    return (
        <div className="productList">
            <MaterialTable
                title="Products Data"
                data={data}
                columns={columns}
                icons={{
                    Add: () => <AddBox style={{ color: 'blue' }} />, 
                    Edit: () => <Edit style={{ color: 'green' }} />, 
                    Delete: () => <DeleteOutline style={{ color: 'red' }} />, 
                    FirstPage: () => <FirstPage />,
                    LastPage: () => <LastPage />,
                    PreviousPage: () => <ChevronLeft />,
                    NextPage: () => <ChevronRight />,
                    Search: () => <Search style={{ color: 'gray' }} />, 
                    ResetSearch: () => <Clear style={{ color: 'gray' }} />, 
                    Check: () => <Check style={{ color: 'green' }} />, 
                    Clear: () => <Close style={{ color: 'red' }} /> 
                }}
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }];
                        setTimeout(() => {
                            setData(updatedRows);
                            resolve();
                        }, 1200);
                    }),
                    onRowDelete: selectedRow => new Promise((resolve, reject) => {
                        const index = selectedRow.tableData.id;
                        const updatedRows = [...data];
                        updatedRows.splice(index, 1);
                        setTimeout(() => {
                            setData(updatedRows);
                            resolve();
                        }, 1200);
                    }),
                    onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                        const index = oldRow.tableData.id;
                        const updatedRows = [...data];
                        updatedRows[index] = updatedRow;
                        setTimeout(() => {
                            setData(updatedRows);
                            resolve();
                        }, 1200);
                    })
                }}
                options={{
                    actionsColumnIndex: -1, 
                    addRowPosition: "first"
                }}
            />
        </div>
    );
}

export default App;
