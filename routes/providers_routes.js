const express = require('express');
// Rutas de productos
const providersApiController = require("../controllers/providersAPI.controller");
const providersApiRouter = express.Router();

providersApiRouter.get('', providersApiController.getProviders);
providersApiRouter.post('', providersApiController.createProvider);
providersApiRouter.put('', providersApiController.updateProvider);
providersApiRouter.delete('', providersApiController.deleteProvider);


module.exports = providersApiRouter;