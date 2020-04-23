const axios = require('axios');


/*  dirección es lo que mandamos por consola*/
const  getLugarLatLng  = async (direccion) =>{

    const encodedUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': '6abbc3158emshad19cd653c27312p12597cjsnfb715b0d3824'}
    });

    const resp = await instance.get();
    /** data es un arreglo recuperado por la API y en Results se almacena los datos climáticos*/
    if( resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dirección}`);
    }

    const data=resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        dir,
        lat,
        lng
    }
}

module.exports ={
    getLugarLatLng
}