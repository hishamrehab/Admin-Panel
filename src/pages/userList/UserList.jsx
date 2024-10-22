import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../components/dummyData';
import { Link } from 'react-router-dom';


const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.userName}
                    </div>
                );
            },
        },


        { field: 'email', headerName: 'Email', width: 140 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'trasaction',
            headerName: 'Tracsaction Volume',
            width: 130,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (

                    <div className='userItems'>
                        <Link to={"/user/" + params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='userListDelete' onClick={() => handleDelete(params.row.id)} />
                    </div>
                )
            }
        }

    ];


    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>


    )
}

export default UserList