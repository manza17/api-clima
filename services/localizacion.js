const https = require('https');



exports.getLocalizacionActual = () =>{
    const options = {
        path: '/json/',
        host: 'ipapi.co',
        port: 443,
        headers: { 'User-Agent': 'nodejs-ipapi-v1.02' }
    };

    return new Promise((resolve, reject) => {  
        https.get(options, function(resp){
            var body = ''
            resp.on('data', function(data){
                body += data;
            });
        
            resp.on('end', function(){
                if(body != '')
                    resolve(JSON.parse(body))
                else
                    reject('Cuerpo vacio')
            });
        });
    })
}

exports.getCity = () => {
    const options = {
        path: '/city/',
        host: 'ipapi.co',
        port: 443,
        headers: { 'User-Agent': 'nodejs-ipapi-v1.02' }
    };

    return new Promise((resolve, reject) => {  
        https.get(options, function(resp){
            var city = ''
            resp.on('data', function(data){
                city += data;
            });
        
            resp.on('end', function(){
                if(city != '')
                    resolve(city)
                else
                    reject('Cuerpo vacio')
            });
        });
    })
}