const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-games')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

const Product = require('./Products');
const Provider = require('./Providers');

function getAllProducts() {
    Product.find({}).populate('provider').exec((err, populatedProduct) => {
        if (err) {
          return "error";
        } else {
            return populatedProduct;
        }
    });
}
async function createProduct(title, price, description, company_name, image) {

    const provider = await Provider.find({company_name});
    const provider_id = provider[0]._id.toString();    

    const product = new Product({
        title,
        price,
        description,
        provider:provider_id,
        image
    });

    const result = await product.save();
    console.log(result);
}


async function updateProduct(title, price, description, image) {
    Product.findOneAndUpdate({ title: title }, { $set: { price: price, description: description, image: image } }, (err, documento) => {
        if (err) {
          return "error";
        } else {
            return documento;
        }
      });
}

async function deleteProduct(title) {
    Provider.findOneAndDelete({ title: title }, (err, deletedProduct) => {
        if (err) {
          return "error";
        } else {
            return deletedProduct;
        }
      });
}


const products = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}
module.exports = products;
