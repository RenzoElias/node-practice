// VERSION
// 1.0.0
// Semantic Version
// Versiones Mayores , Adiciones en la misma version , Bug Fixes

// const crearArchivo = (base = 5) => {

//   return new Promise((resolve, reject) => {
    
//       console.log("==================");
//       console.log(`tabla de ${base}`);
//       console.log("==================");
    
//       let salida = "";
    
//       for (let i = 1; i <= 10; i++) {
//         salida += `${base} * ${i} = ${base * i}\n`;
//       }
    
//       console.log(salida);
    
//       fs.writeFileSync(`tabla-${base}.txt`, salida);
    
//       resolve(`tabla-${base}.txte creado`);


//   })
// };

const fs = require('fs'); // Se importa un modulo interno, Dependencia
require('colors') 

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

  
    try{

      
      
      let salida = "";
      let consola = "";
      
      for (let i = 1; i <= hasta; i++) {
        consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        salida += `${base} x ${i} = ${base * i}\n`;
      }
      
      if(listar) {
        console.log("==================".green);
        console.log(`tabla de ${base}`);
        console.log("==================".green);
        
        console.log(consola);
      }

      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); // Creas antes la carpeta salida
    
      return `tabla-${base}.txt`

    } catch (err){

      throw err

    }


};


module.exports = {crearArchivo}