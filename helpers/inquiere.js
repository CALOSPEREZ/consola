const inquirer = require("inquirer");

const preguntas = [
  {
    type: "list",
    name: "option",
    message: "que deseas hacer?",
    choices: [
      {
        value: "1",
        name: `${'1.'.red} crear una tarea.`,
      },
      {
        value: "2",
        name: "2. listar  tareas.",
      },
      {
        value: "3",
        name: "3. listar  tareas completadas.",
      },
      {
        value: "4",
        name: "4. listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. completar tarea.",
      },
      {
        value: "6",
        name: "6. borrar.",
      },
      {
        value: "0",
        name: "0. salir",
      },
    ],
  },
];
const question = [
  {
    type: "input",
    name: "pausa",
    message: `presione ${"ENTER".red} para continuar`,
  },
];
const interface = async () => {
  console.log("===========================".green);
  console.log("Seleccione una opcion".blue);
  console.log("===========================".green);
  const { option } = await inquirer.prompt(preguntas);
  return option;
};
const pausas = async () => {
  const { pausa } = await inquirer.prompt(question);
  return pausa;
};
const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "descrip",
      message,
      validate(value) {
        if (value.length === 0) return "Por favor ingrese una descripcion";
        return true;
      },
    },
  ];
  const { descrip } = await inquirer.prompt(question);
  return descrip;
};

module.exports = {
  interface,
  pausas,
  leerInput
};
