import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'
import Chart from "../../components/chart/Cahrt"
import { productData } from "../../components/dummyData"
import PublishIcon from '@mui/icons-material/Publish';
const Product = () => {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className='productTitle'>
                    Product
                </h1>
                <Link to="/newProduct">
                    <button className='productAddButton'>
                        Create
                    </button>
                </Link>
            </div>
            <div className='productTop'>
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src='data:image/jpeg;base64,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' alt='' className='productInfoImg' />
                        <span className='productName'>Watch</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className='productInfoKey'>
                                id:
                            </span>
                            <span className='productInfoValue'>
                                123
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className='productInfoKey'>
                                sales:
                            </span>
                            <span className='productInfoValue'>
                                5123
                            </span>
                        </div>

                        <div className="productInfoItem">
                            <span className='productInfoKey'>
                                avtive:
                            </span>
                            <span className='productInfoValue'>
                                Yes
                            </span>
                        </div>


                        <div className="productInfoItem">
                            <span className='productInfoKey'>
                                in stock:
                            </span>
                            <span className='productInfoValue'>
                                no
                            </span>
                        </div>

                        <div className="productInfoItem">
                            <span className='productInfoKey'>
                                id:
                            </span>
                            <span className='productInfoValue'>
                                123
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='productBottom'>
                <form className='productForm'>
                    <div className="productFromLeft">
                        <label>Product Name</label>
                        <input type='text' placeholder='Watch' />
                        <label>In Stock</label>
                        <select name='inStock' id='inStock'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>
                    <div className="productFromRight">
                        <div className='productUpload'>
                            <img src='data:image/jpeg;base64,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' alt='' className='productUploadImg' />
                            <label for="file">
                                <PublishIcon />
                            </label>
                            <input type='file' id='file' style={{
                                display: "none"
                            }} />
                        </div>
                        <button className='productButton'>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product