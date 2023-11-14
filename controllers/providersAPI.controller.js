const providers = require('../models/providers.model'); // Importar el modelo de la BBDD
 
const getProviders = async (req, res) => {
    let provider = await providers.getAllProviders();
    if (provider == "error") {
        res.status(404).json({message: "Not found"});
    } else {
        res.status(200).json(provider);
    }
}

const createProvider = async (req, res) => {
    const { company_name, CIF, address, url_web } = req;
    let provider = await providers.createProvider(company_name, CIF, address, url_web);
    if (provider == "error") {
        res.status(404).json({message: "Could not post"});
    } else {
        res.status(201).json({message: "proveedor creado", provider:{provider}});
    }
}

const updateProvider = async (req, res) => {
    const { company_name, CIF, address, url_web } = req;
    let provider = await providers.updateProvider(company_name, CIF, address, url_web);
    if (provider == "error") {
        res.status(404).json({message: "Could not update"});
    } else {
        res.status(200).json({message: `proveedor actualizado: ${company_name}`, provider:{provider}});
    }
}

const deleteProvider = async (req, res) => {
    const { company_name } = req;
    let provider = await providers.deleteProvider(company_name);
    if (provider == "error") {
        res.status(404).json({message: "Could not delete"});
    } else {
        res.status(200).json({message: `Se ha borrado el proveedor: ${company_name}`});
    }
}


module.exports = {
    getProviders,
    createProvider,
    updateProvider,
    deleteProvider
}