const express = require('express');
const app = express();
const aux = require('../services/helper');
const localizacion = require('../services/localizacion');
const clima = require('../services/clima');


app.get('/',(req,res)=>{
    res.status(200).json({"msg":"Bienvenido"})
})

app.get('/location',async (req,res)=>{
    localizacion.getLocalizacionActual()
    .then(data => {
        res.status(200).json({
            "ok":true,
            data
        });
    }).catch(err => res.status(200).json({
        "ok": false,
        "msg":err
    }))
});

app.get('/current/:city?',async (req,res)=>{
    let city = req.params.city;
    if(typeof city === 'undefined')
        city = await localizacion.getCity()
    clima
    .getClima(city.split(" ").join("%20"))
    .then(data => {
        let code = 200, resp = { "ok" : true }
        if(data.cod == 200){
            resp.city = aux.getCity(data)
            resp.clima = data.main
        }else{
            code = 400
            resp.msg = data.message
        }
        res.status(code).json(resp)
    })
    .catch(err => {
        res.status(404).json({
            "ok": false,
            "msg":err
        })
    })
});

app.get('/forecast/:city?',async (req,res)=>{
    let city = req.params.city;
    if(typeof city === 'undefined')
        city = await localizacion.getCity()
    clima
    .getClima(city.split(" ").join("%20"),"forecast")
    .then(data => {
        let code = 200, resp = { "ok" : true }
        if(data.cod == 200){
            resp.clima = aux.getArregloCincoDias(data.list)
            resp.city = data.city
        }else{
            code = 400
            resp.msg = data.message
        }
        res.status(code).json(resp)  
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({
            "ok": false,
            "msg":err
        })
    })
});

module.exports=app