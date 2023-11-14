const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-games')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

const Provider = require('./Providers');

async function getAllProviders() {
    let documents = await Provider.find({})
    return documents;  
}

async function createProvider(company_name, CIF, address, url_web) {
    const provider = new Provider({
        company_name,
        CIF,
        address,
        url_web
    });

    const result = await provider.save();
    return provider;
}


async function updateProvider(company_name, CIF, address, url_web) {
    Provider.findOneAndUpdate({ company_name: company_name }, { $set: { CIF: CIF, address: address, url_web: url_web } }, (err, documento) => {
        if (err) {
          return "error";
        } else {
            return documento;
        }
      });
}

async function deleteProvider(company_name) {
    Provider.findOneAndDelete({ company_name: company_name }, (err, deletedCompany) => {
        if (err) {
          return "error";
        } else {
            return deletedCompany;
        }
      });
}


const providers = {
    getAllProviders,
    createProvider,
    updateProvider,
    deleteProvider
}
module.exports = providers;
