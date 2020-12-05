const fs = require('fs');
const { isUndefined } = require('util');
const { runInNewContext } = require('vm');



let listadorPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadorPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            console.log('Error al guardar los datos')
        } else {
            console.log('Los datos se guardaron correctamente')
        }
    });
}


cargarDB = () => {
    try {
        listadorPorHacer = require('../db/data.json');
    } catch (error) {
        listadorPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };


    listadorPorHacer.push(porHacer); //agregar el objeto al array
    guardarDB();

    return porHacer;
}

getListado = () => {
    cargarDB();
    return listadorPorHacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadorPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadorPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


 const borrar = (descripcion) => {
    cargarDB();
    let index = listadorPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadorPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear: crear,
    getListado: getListado,
    actualizar: actualizar,
    borrar: borrar

}

