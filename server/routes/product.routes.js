const ProductController = require("./../controllers/product.controller")

module.exports = (app) => {
    app.post('/api/addproducts', ProductController.addProduct)
    app.get('/api/allproducts', ProductController.allProducts)
    app.get('/api/products/:id', ProductController.getProduct)
    app.put('/api/updateproducts/:id', ProductController.updateProduct)
    app.delete('/api/deleteproducts/:id', ProductController.deleteProduct)
}