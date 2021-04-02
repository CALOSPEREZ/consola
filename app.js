require("colors");
require('dotenv').config();

console.log(process.env.CONDIG);
// const { mensajes, pausa } = require("./helpers/mensajes");
const { interface, pausas, leerInput } = require("./helpers/inquiere");
const { guardar, leerData } = require("./helpers/guardarLeerbd");
const Tareas = require("./models/Tareas");

const main = async () => {
  let option = "";
  let desc = "";
  const data = leerData();

  const tareas = new Tareas();
  if (data) tareas.cargarTareas(data);

  do {
    option = await interface();
    await options(option, tareas);
    guardar(tareas.listArray);
    option != "0" ? await pausas() : NaN;
  } while (option !== "0");
};
const options = async (option, tareas) => {
  switch (option) {
    case "1":
      desc = await leerInput("Ingrese la descripcion de la tarea:");
      tareas.crearTarea(desc);
      break;
    case "2":
      console.log(tareas.listarTarea());
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      break;
  }
};
// main();
