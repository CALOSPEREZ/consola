require("colors");
const mensajes = () => {
  return new Promise((resolve) => {
      console.clear()
    console.log("===========================".green);
    console.log("Seleccione una opcion".green);
    console.log("===========================".green);
    console.log(` ${"1.".gray} crear tarea`);
    console.log(` ${"2.".gray} listar tarea `);
    console.log(` ${"3.".grey} listar tarea completadas`);
    console.log(` ${"4.".gray} listar tarea pendientes`);
    console.log(` ${"5.".gray} listar tarea(s)`);
    console.log(` ${"6.".gray} borrar`);
    console.log(` ${"0.".gray} salir`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("seleccione una opcion: ".green, (option) => {
      readline.close();
      resolve(option);
    });
  });
};
const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`Presione ${"Enter".red} para salir.`, (option) => {
        readline.close();
        resolve();
    });
  });
};
module.exports = {
  mensajes,
  pausa,
};
