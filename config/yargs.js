const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true, 
                    describe: 'Base de la tabla de multiplicar'                 
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default:10,
                    describe: 'Hasta donde quires la tabla'                 
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default:false,
                    describe: 'Listar tabla en pantalla'                 
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;