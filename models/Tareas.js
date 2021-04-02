const Tarea = require("./Tarea");

class Tareas {
  _list = {};

  get listArray() {
    const listado = [];
    Object.keys(this._list).forEach((key) => {
      const tarea = this._list[key];
      listado.push(tarea);
    });
    return listado;
  }

  listarTarea() {
    let tareas = [];
    tareas = this.listArray;
    let listResult = "";
    let i = 0;
    tareas.forEach((element,i) => {
      listResult += `${i++} ${element.desc} :: ${
        element.completadoEn ? "completado".green : "Pendiente".red
      }\n`;
    });
    return listResult;
  }

  cargarTareas(tareas = []) {
    tareas.forEach((element) => {
      this._list[element.id] = element;
    });
  }
  constructor() {
    this._list = {};
  }
  crearTarea(desc) {
    const tarea = new Tarea(desc);
    this._list[tarea.id] = tarea;
  }
}

module.exports = Tareas;
