exports.getArregloCincoDias = (array = [])=>{
    let retorno = [], obj = {};
    array.forEach(arr => {
        obj.fecha = arr.dt_txt
        obj.data = arr.main
        retorno.push(obj)
        obj = {}
    });
    return retorno;
}

exports.getCity = (obj)=>{
    let city = {}
    city.id = obj.id
    city.name = obj.name
    city.coord = obj.coord
    city.country = obj.sys.country
    city.sunrise = obj.sys.sunrise
    city.sunset = obj.sunset
    city.timezone = obj.timezone
    return city;
}