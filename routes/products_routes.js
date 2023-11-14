const express = require('express');
// Rutas de productos
const productsApiController = require("../controllers/productsAPI.controller");
const productsApiRouter = express.Router();

productsApiRouter.get('', productsApiController.getProducts);
productsApiRouter.post('', productsApiController.createProduct);
productsApiRouter.put('', productsApiController.updateProduct);
productsApiRouter.delete('', productsApiController.deleteProduct);

module.exports = productsApiRouter;