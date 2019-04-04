const optCreate = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de un toDo\'s'
    }
};
const optUpdate = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de un toDo\'s'
    },
    completed: {
        default: true,
        alias: 'c',
        desc: 'Marca como completada o pendiente'
    }
};
const argv = require('yargs')
    .command('crear', 'Crea un toDo\'s', optCreate)
    .command('actualizar', 'Actualiza el estado de las toDo\'s', optUpdate)
    .command('borrar', 'Borrar un toDo\'s', optUpdate)
    .help()
    .argv;

module.exports = {
    argv
}