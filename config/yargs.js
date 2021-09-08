const { describe } = require('yargs');

const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base tabla multiplicar'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Numero limite de tabla multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Listar consola'
                })
                .check( (argv, options) => {
                    if(isNaN(argv.b)){  // is Not a Number
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                    // console.log('yargs ', argv)
                })
                .argv; // De este modulo quiero extraer solo el ".argv"

module.exports = argv;