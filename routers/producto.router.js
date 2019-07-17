const router = require('express').Router();

module.exports = (wagner) => {
    
    const ProductoCtrl = wagner.invoke((Producto) => 
        require('../controllers/producto.controller')(Producto));

    router.post('/', (req, res) => ProductoCtrl.createProducto(req, res));          
    
    router.get('/', (req, res) => ProductoCtrl.findAll(req, res));

    router.put('/:id', (req, res) => ProductoCtrl.Actualizar(req, res));

    router.delete('/:id', (req, res) => ProductoCtrl.Eliminar(req, res));
        
   
    return router;
};