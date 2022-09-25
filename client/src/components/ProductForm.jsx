import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    // const [productForm, setProductForm] = useState({
    //     title: "",
    //     price: 0, 
    //     description: ""
    // })

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addproducts', {
            title, 
            price, 
            description
        })
            .then(res=>props.onCreate(res.data))
            .catch(err=>console.log(err))
        setTitle("")
        setPrice(0)
        setDescription("")
    }

    return (
        <form onSubmit = {handleSubmit}>
            <h1>Product Manager</h1>
            <p>
                <label>Title:</label>
                <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price:</label>
                <input type="text" name='price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description:</label>
                <input type="text" name='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit" value="Create Product" />
        </form>
    )

}

export default ProductForm