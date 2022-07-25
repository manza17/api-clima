# Api rest de consulta del clima

Esta api tiene como objetivo realizar consultas del clima basado en una ubicación.
Las mismas responden a un parametro opcional que es la ciudad, en donde el cliente puede requerir la informacion del clima basado en su ubicacion (Sin parametros, se obtiene su ubicacion mediante el ip) o puede agregar como parametro la ciudad de la cual desea saber. Además, puede consultar el clima 5 días posteriores con un intervalo de 3 horas (con la misma metodologia, agregando como parametro la ciudad)

## Comenzando 🚀

Para realizar prueba y obtener el proyecto local

### Clonar repositorio

Abrir git bash e ir al directorio donde se desea clonar el proyecto y escribir el siguiente comando

<pre>$ git clone https://github.com/manza17/api-clima.git</pre>

## Realizar pruebas

1- Instalar las dependencias del proyecto

 En la carpeta donde se encuentra el proyecto, abrir una consola y colocar el siguiente comando
 <pre>$ npm i </pre>
 
2- Creaer archivo para las variables de entorno.    


  Dentro del proyecto creamos un archivo **.env**
  
  
  Donde se debe configurar las siguiente variables:
  
  
  **PORT**: puerto en el cual se desea correr el servidor. Por ejemplo: 3000
  
  
  **APPID**: ID del servicio API clima de [open weather map](https://openweathermap.org/api)
  
  ##### Dejo mi ID por las dudas.
  *APPID=94e45d51ff1151396a8b4b596456a4e6* 
  
## API REST

### Ruta base

`GET /v1`

<pre>curl -i -H 'Accept: application/json' http://localhost:3000/v1 </pre>

### Endpoints

`GET /location`

#### Devuelve los datos de la ubiación según ip-api

<pre>curl -i -H 'Accept: application/json' http://localhost:3000/location </pre>

`GET /current[/city]`

#### City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo actual.

<pre>curl -i -H 'Accept: application/json' http://localhost:3000/current o http://localhost:3000/current/chascomus </pre>

`GET /forecast[/city]`

#### City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días con un intervalo de 3 horas

<pre>curl -i -H 'Accept: application/json' http://localhost:3000/forecast o http://localhost:3000/forecast/barcelona </pre>

## Construido con 🛠️

### NodeJS 

#### Dependencias

##### Producción

###### Framework Express para el manejo de peticiones HTTP
###### dotenv para el manejo de variables de entorno

##### Desarrollo

###### Jest y Supertest para realizar el test

## Fin
