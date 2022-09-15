//? dependencias.
const express = require("express");
const swaggweUi = require('swagger-ui-express') //? para documentar la api.

//? archivos de rutas.
const userRouter = require("./users/users.router").router;
const authRouter = require("./auth/auth.router").router;
const accomodationsRouter = require('./accomodations/accomodations.router').router
const reservationRouter = require('./reservations/reservations.router').router

const swaggerDoc = require('./swagger.json')
const accomodations = require('./models/accomodations.models')
const { initModels } = require("./utils/initModels");
const generateData = require("./utils/defaultData")


//? configuraciones iniciales.
const { db } = require("./utils/database");
const app = express();

//? inicializamos los modelos.
initModels();

db.authenticate()
  .then(() => console.log("Database Authenticate"))
  .catch((err) => console.log(err));

/*  hacemos una condicional haciendo uso de la variable de entorno NODE_ENV
    para saber si nuestra base de datos se encuentra en desarrollo/produccion/testing.
    si es === 'development' es que esta en desarrollo, si es === 'production' es que esta en produccion.
    Si esta en produccion, al db.sync() le quitamos el {force:true}.
*/
if(process.env.NODE_ENV === 'production'){ //? aqui estamos en production.
  db.sync()
  .then(() => {
    console.log("Database synced");
    generateData()
  })
  .catch((err) => console.log(err));
} else{ //? aqui estamos en desarrollo.
  db.sync({force:true}) //? el {force:true} es para que mientras estemos trabajando en una bd de desarrollo, nuestros datos no mueran.
  .then(() => {
    console.log("Database synced");
    generateData()
  })
  .catch((err) => console.log(err));
}

require("dotenv").config();
const port = process.env.PORT;

//? esta configuracion es para habilitar el req.body
app.use(express.json());

//? las rutas para hacer las peticiones.
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/accommodations", accomodationsRouter)
app.use("/api/v1/reservations", reservationRouter)
app.use("/v1/doc", swaggweUi.serve, swaggweUi.setup(swaggerDoc))

//? para probar que mi servidor funcione.
app.listen(port, () => {
  console.log(`Server started ${port}`);
});