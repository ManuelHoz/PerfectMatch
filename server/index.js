const app = require("./src/app.js");
const sequelize = require("./src/db/db.js");
require("./src/models/partido.js");
require("./src/models/administrador.js");
require("./src/models/deportista.js");

const PORT = process.env.PORT || 4000;

const main = async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate({ force: true }); //-> opción que vuleve a crear las tablas
    //await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
