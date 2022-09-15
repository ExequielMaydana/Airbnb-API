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

//! NO ME ANDA ESTO CHINGADA MADRE
app.get('/', async (req, res) => {
  try {
    const data = await accomodations.create({ //? create -> es para crear uno solo.
      id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
      title: "premium - vistas 360 ciudad (alberca y gym)",
      description: "asd",
      guests: 6,
      rooms: 3,
      beds: 3,
      bathrooms: 4.5,
      price: 1536.00,
      hostId :'74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
      score: 0.00,
      placeId: '0d907427-7623-4ec9-8c6d-270bb92fbbe7',
      commision: 150.00
    })
    res.status(200).json({message: "All ok!", data})
  } catch (err) {
    res.status(400).json(err)
  }
})


//? para probar que mi servidor funcione.
app.listen(port, () => {
  console.log(`Server started ${port}`);
});