const https = require('https');

exports.getClima = (ciudad,type='weather') =>{
    
    let options = {
        path: `/data/2.5/${type}?q=${ciudad}&APPID=${process.env.APPID}&units=metric`,
        host: 'api.openweathermap.org',
        port: 443,
        headers: { 'content-type': 'application/json' }
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
