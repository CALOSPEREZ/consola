const fs = require("fs");
  const directorio = "./db/data.json";
const guardar = (data) => {

  fs.writeFileSync(directorio, JSON.stringify(data));
};
const leerData = () =>{
    if(!fs.existsSync(directorio))
    return null;
    const info = fs.readFileSync(directorio,{encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}
module.exports = {
  guardar,
  leerData
};
