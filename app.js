const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors') // si no usaras el metodo colors, se puede poner solo // require('colors') 

// Esta config debe esta aparte esta logica de yargs - se va a Config/yargs.js
// const argv = require('yargs')
//                 .option('b',{
//                     alias: 'base',
//                     type: 'number',
//                     demandOption: true
//                 })
//                 .option('l',{
//                     alias: 'listar',
//                     type: 'boolean',
//                     demandOption: true,
//                     default: false
//                 })
//                 .check( (argv, options) => {
//                     if(isNaN(argv.b)){  // is Not a Number
//                         throw 'La base tiene que ser un numero'
//                     }
//                     return true;
//                     // console.log('yargs ', argv)
//                 })
//                 .argv; // De este modulo quiero extraer solo el ".argv"

console.clear()

// 2da Manera - De extraer los argumentos de consola
// console.log(argv)
// console.log(process.argv)

console.log('base: yargs', argv.base, argv.hasta)


// const base= 5;

//Argumentos que vienen desde la consola
// console.log(process.argv)

// Si EJECUTO
// node app --base=9
// MOSTRARA
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\User\\Documents\\nodejs\\Youtube\\node-express-course-main\\VLC - node\\multiplicar-node-rz\\app.js',
//     '--base=9'
// ]


// AHORA PARA RECOGER ESA DATA INGRESADA POR CONSOLA - 1era Manera - que no es recomendable
// const [,,arg3]=process.argv;
// const [,base = 5] = arg3.split('='); // Split separa en 2 arreglos [ --base , 5 ] // Entonces para extraelo desestructuramos // Si no manda argumento el por defecto sera el que se pone igual
// console.log( base ); // Mostrara // --base=9



// Si se hizo bien o mal // se hara con .then o .catch
// Osea convertir la funcion en una promesa
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' creado') )
    .catch( err => console.log(err) );




// Aqui atrapa el error en el 3er parametro
// fs.writeFile(,salida, (error) => { ... } )

// fs.writeFileSync
// PARA Atrapar el error si sucede, se tendra que hacer con 
// TRY - CATCH

