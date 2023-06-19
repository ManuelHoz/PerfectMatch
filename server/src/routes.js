const login = require("./routes/login.routes.js");
const deportista = require("./routes/deportistas.routes.js");
const administrador = require("./routes/administradores.routes.js");
const partido = require("./routes/partidos.routes.js");


module.exports = (app) => {
  app.use(login);
  app.use(deportista);
  app.use(administrador);
  app.use(partido);
};
