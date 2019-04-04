//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./toDo/toDo');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let goal = toDo.crear(argv.description);
        console.log(goal);
        break;
    case 'listar':
        let listed = toDo.getListed();
        for (const goal of listed) {
            console.log('====Por Hacer===='.green);
            console.log(goal.description);
            console.log('Estado: ', goal.completed);
            console.log('================='.green);
        }

        break;
    case 'actualizar':

        let update = toDo.update(argv.description, argv.completed);
        console.log(update);
        break;
    case 'borrar':
        let del = toDo.deleted(argv.description);
        console.log(del);
        break;

    default:
        console.log('Comando no es reconocido.');
}