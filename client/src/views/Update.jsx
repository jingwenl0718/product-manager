import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then (res=> {
                setTitle (res.data.title)
                setPrice (res.data.price)
                setDescription (res.data.description)
            })
            .catch (err=> console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateproducts/${id}`, {
            title, 
            price, 
            description
        })
            .then(res => navigate(`/products/${res.data._id}`))
            .catch(err => console.log(err))
    }


  return (
    <div>
        <h1>Update a Product</h1>
        <form onSubmit = {handleSubmit}>
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
            <input type="submit" value="Update a Product" />
            {/* <Link to="'/allproducts'">Go Back</Link> */}
            <button onClick={() => navigate(`/products/${id}`)} >Go Back</button>
        </form>
    </div>
  )
}

export default Update