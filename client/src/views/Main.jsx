import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main =  () => {
//Can all of these be placed inside ProductForm??
    const [productList, setProductList] = useState([])

    // option 1:
    // const [refresh, setRefresh] = useState(true)
    // const changeList = ()=> setRefresh(!refresh)
    
    // useEffect(()=> {
    //     axios.get('http://localhost:8000/api/allproducts')
    //         .then(res=>{
    //             setProductList(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }, [refresh])

    // option 2:
    useEffect(()=> {
        axios.get('http://localhost:8000/api/allproducts')
            .then(res=>{
                setProductList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const addProduct = (newProduct) => {
        setProductList([...productList, newProduct])
    }

    const filteredList = (deleteId) => {
        const updatedProduct = productList.filter((eachProduct)=>deleteId !== eachProduct._id)
        setProductList (updatedProduct)
    } 

    return (
        <div>
            {/* <ProductForm changeList={changeList}/> //option 1 */}
            {/* option 2 */}
            <ProductForm onCreate={addProduct}/> 
            <hr />
            {/* {productList && <ProductList productList = {productList} changeList={changeList} />} //option 1 */}
            {/* option 2 */}
            {productList && <ProductList productList = {productList} filteredList={filteredList} />}
        </div>
    )
}

export default Main