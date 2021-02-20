const fs = require ('fs');
const path = require('path');
const products_db = path.join('data', 'productos.json');

module.exports = {
    getProducts: () => {
        return JSON.parse(fs.readFileSync(products_db,'utf-8'));
    },
    setProducts: (data) => {
        fs.writeFileSync(products_db, JSON.stringify(data), 'utf-8');
    }
}