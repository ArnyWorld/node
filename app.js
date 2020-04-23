/*  Llamando al archivo lugar.js*/
const lugar = require('./lugar/lugar');
/** Llamando al archivo clima*/
const clima = require('./clima/clima');
/** argv nos ayuda a recuperar un dato enviado por consola */
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Dirección dee la ciudad para obtener el clima',
        demand: true
    }
}).argv;
/*
lugar.getLugarLatLng(argv.direccion)
.then(valor =>{
    console.log(valor);
})
.catch(err =>{
    console.log(err);
});
*/
clima.getClima(-16.500000,-68.150002)
.then(valor =>{
    console.log(valor);
})  
.catch(err=>{
    console.log(err)
})


const getInfo = async (direccion)=>{
    const lug= await lugar.getLugarLatLng(direccion);
    const cli= await clima.getClima(lug.lat, lug.lng); 
    
    return cli;

}

getInfo(argv.direccion)
.then(resp=>{
    console.log(`El clima de ${argv.direccion} es de ${resp}`);
})
.catch(err =>{
    console.log(`No se pudo determinar el clima de ${argv.direccion}`);
})



