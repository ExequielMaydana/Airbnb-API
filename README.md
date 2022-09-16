# deploy -> https://airbnb-maydana-dev.onrender.com/v1/doc/#/

Este es el proyecto final del modulo de Backend en Academlo, en el cual estamos trabajando con Node.js y Express, haciendo uso del gestor de bases de datos PostgreSQL.
Dicho proyecto consta de hacer un clon de la siguiente web: https://www.airbnb.mx/

# Paths de mi usuario a traves de  mi aplicacion

registrar mi usuario
loggear mi usuario

# Usuario sin sesion iniciada

1. Ver los lugares
2. puede ver la informacion de un lugar

# Guest

1. Ver los lugares
2. puede ver la informacion de un lugar
3. Reservar
4. Cancelar su reservacion
4. Dar un score una vez finalizada la reservacion

# Host

1. Ver los lugares
2. puede ver la informacion de un lugar
3. reservar
4. Dar un score una vez finalizada la reservacion
5. Crear lugares
6. Cancelar reservaciones en los lugares donde es host
7. Puede ver perfiles de usuario
8. Puede ver todos los lugares que le pertenecen
9. editar el lugar
10. eliminar el lugar

# Admin
1. Ver los lugares
2. puede ver la informacion de un lugar
3. reservar
4. Dar un score una vez finalizada la reservacion
5. Puede ver perfiles de usuario
6. editar el lugar
7. eliminar el lugar
8. modificar roles
9. eliminar un usuario
10. modificar un usuario


# rutas.

## ACCOMODATIONS = alojamientos
api/v1/accomodations

/
- GET
- POST

/:id
- GET
- DELETE
- PUT
- PATCH

# revisar si esta disponible para alojar tal alojamiento.
/:id/available/?arrival=value&departure=value
- GET


# Ejemplo para documentar la api
https://petstore.swagger.io/v2/swagger.json
