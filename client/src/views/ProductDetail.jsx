import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import {Link, useNavigate} from 'react-router-dom'

const ProductDetail = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const {id} = useParams()
    
    useEffect ( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct (res.data))
            .catch(err => console.log(err))
    }, [])

    // const handleClick = () => {
    //     navigate('/allproducts')
    // }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            {/* <button onClick={handleClick} >Go Back</button> */}
            <Link to={"/products/" + id + "/update"}>Edit</Link>
            <button onClick={() => navigate('/allproducts')} >Go Back</button>
        </div>

    )
}

export default ProductDetail