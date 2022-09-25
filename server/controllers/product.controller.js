const { request } = require("express")
const Product = require("./../models/product.model")

// get all
module.exports.allProducts = async (req, res) => {
try {
    const allProducts = await Product.find()
    res.json(allProducts)
} catch(error) {
    res.json(error)
} 
}

// get one
module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// craete
// option 1:
module.exports.addProduct = (req, res) => {
    const {title, price, description} = req.body
    Product.create({
        title, 
        price, 
        description
    }
    )
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
}

// option 2:
// module.exports.addProduct = async (req, res) => {
// try {
//     const newProduct = req.body
//     const product = await Product.create(newProduct)
//     res.json(product)
// } catch (error) {
//     res.json(error)
// }
// }

// update
module.exports.updateProduct = (req, res) => {
    const paramsId = req.params.id
    const updatedProduct = req.body
    Product.findOneAndUpdate(
        {_id: paramsId},
        updatedProduct,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err))
}

// delete
module.exports.deleteProduct = (req, res)=> {
    Product.findByIdAndDelete({_id: req.params.id})
        .then(deletedProduct=> res.json(deletedProduct))
        .catch(err=> res.status(400).json(err))
}