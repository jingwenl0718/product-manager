import React from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

const ProductList = (props) => {
    const navigate = useNavigate()

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/deleteproducts/${productId}`)
            .then(res => props.filteredList(productId))
            .catch(err=> console.log(err))
    }

    const handleUpdate = (productId) => {
        navigate (`/products/${productId}/update`)
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <table>
                <thead>
                    <tr>
                        <th>Product</th> 
                        <th>Actions</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        props.productList.map((product, i) => {
                            return(
                                <tr key={i}>
                                    <td><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                                    <td>
                                        <button onClick={()=> handleUpdate(product._id)}>Edit</button>
                                        <button onClick={()=> deleteProduct(product._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        
    )
}

export default ProductList