const axios = require('axios');

const getClima = async (lat, lng)=>{
    const respuesta = await axios.get(`httpa://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng }&appid=8b30cb8bc6b13d0f7dc0bd346eac4032&units=metric`);
    /*respuesta.then(valor =>{
        console.log(valor);
    })
    .catch(err =>{
        console.log(err);
    })*/
    return respuesta.data.main.temp ;
    
}


module.exports= {getClima};