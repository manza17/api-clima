const express = require('express');
const app = express();
const index = require('.')
const cors = require('cors')

require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//direccionamiento de rutas
app.use('/v1',index);

const port = process.env.PORT;

app.listen(port,()=>console.log("server port: "+port));