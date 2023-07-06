
const partido = require("./routes/partidos.routes.js");


module.exports = (app) => {
  app.use(partido);
};
