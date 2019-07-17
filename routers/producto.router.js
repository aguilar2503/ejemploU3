const router = require('express').Router();

module.exports = (wagner) => {
    
    const ProductoCtrl = wagner.invoke((Producto) => 
        require('../controllers/producto.controller')(Producto));

    router.post('/', (req, res) => ProductoCtrl.createProducto(req, res));          
    
    router.get('/', (req, res) => ProductoCtrl.findAll(req, res));
   
    return router;
};