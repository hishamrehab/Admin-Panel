import React, { useState } from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../components/dummyData';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },


        { field: 'stock', headerName: 'Stock', width: 140 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 130,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (

                    <div className='productList'>
                        <Link to={"/product/" + params.row.id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                    </div>
                )
            }
        }

    ];


    return (
        <div className='productList'>
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

export default ProductList