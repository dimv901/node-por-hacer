const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 0
    }
}


const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completado una tarea'
}

const argv = require('yargs')
    .command('listar', 'Lista todas las tareas')
    .command('crear', 'Crear una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    }).command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help().argv;

module.exports = {
    argv: argv
}