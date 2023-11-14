const mongoose = require('mongoose');


const objectSchema = {
    company_name: String,
    CIF: String,
    address: String,
    url_web: String
}

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;

/*
Para añadir nuevo juevo
1- Buscar el ID que tiene SONY en mongoDB -> const pub = Publisher.find({company:Sony})
2- Crear el juego, añadiendo el ID -> new Publisher({title:"Tomb Raider",publisher_id:pub._id})
*/