import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { AddBox, Edit, DeleteOutline, FirstPage, LastPage, ChevronLeft, ChevronRight, Search, Clear, Check, Close } from '@material-ui/icons'; // Import Check and Close icons
import './UserList.css';

const empList = [
    { id: 1, name: "Ahmed Ali", email: 'AhmedAli@gmail.com', phone: "+20123456789", city: "Cairo" },
    { id: 2, name: "Mohamed Kamal", email: 'MohamedKamal@gmail.com', phone: "+20123456789", city: "Zagazig" },
    { id: 3, name: "Abdallah Gamal", email: 'AbdallahGamal@gmail.com', phone: "+20123456789", city: "Aswan" },
    { id: 4, name: "Yasser Ibrahiem", email: 'YasserIbrahiem@gmail.com', phone: "+20123456789", city: "Mansoura" },
];

function App() {
    const [data, setData] = useState(empList);

    const columns = [
        { title: "ID", field: "id", editable: false },
        { 
            title: "Name", 
            field: "name",
            render: rowData => (
                <div className="userListUser">
                    {rowData.name}
                </div>
            )
        },
        { title: "Email", field: "email" },
        { title: "Phone Number", field: 'phone' },
        { title: "City", field: "city" }
    ];

    return (
        <div className="userList">
            <MaterialTable
                title="Users Data"
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
