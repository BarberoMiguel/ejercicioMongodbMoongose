const products = require('../models/products.model'); // Importar el modelo de la BBDD
 
const getProducts = async (req, res) => {
    let product = await products.getAllPoducts();
    if (product == "error") {
        res.status(404).json({message: "Not found"});
    } else {
        res.status(200).json(product);
    }
}

const createProduct = async (req, res) => {
    const { title, price, description, company_name, image } = req;
    let product = await products.createProduct(title, price, description, company_name, image);
    if (product == "error") {
        res.status(404).json({message: "Could not post"});
    } else {
        res.status(201).json({message: "producto creado",product:{product}});
    }
}

const updateProduct = async (req, res) => {
    const { title, price, description, image } = req;
    let product = await products.updateProduct(title, price, description, image);
    if (product == "error") {
        res.status(404).json({message: "Could not update"});
    } else {
        res.status(200).json({message: `producto actualizado: ${title}`, product:{product}});
    }
}

const deleteProduct = async (req, res) => {
    const { title } = req;
    let provider = await products.deleteProduct(title);
    if (provider == "error") {
        res.status(404).json({message: "Could not delete"});
    } else {
        res.status(200).json({message: `Se ha borrado el producto: ${title}`});
    }
}


module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}