const http = require('http');
const path = require('path');
const status = require('http-status');

let _prod;
const createProducto = (req, res) => {
    //var a = req.body.total
    //var b = req.params.name 
    const producto = req.body;

    _prod.create(producto)
        .then((data) => {
            res.status(200);
            res.json({
                msg: "Producto creado ",
                data: data
            });
        })
        .catch((err) => {
            res.status(400);
            res.json({
                msg: "Error!!!!",
                data: err
            });
        })
}

const findAll = (req, res) => {
    _prod.find()
        .then((data) => {
            if (data.length == 0) {
                res.status(status.NO_CONTENT);
                res.json({
                    msg: "No se encontraron productos"
                });
            } else {
                res.status(status.OK);
                res.json({
                    MST: "EXITO",
                    data: data
                })
            }
        })
        .catch((err) => {
            res.status(status.BAD_REQUEST);
            res.json({
                msg: " EXITO"
            });
        });
}


module.exports = (Producto) => {
    _prod = Producto;
    return ({
        createProducto,
        findAll
        
    });
}