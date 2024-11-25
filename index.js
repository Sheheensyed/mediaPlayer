//1) import json library
const jsonServer = require('json-server')

//2) create the server
const mediaplayerserver = jsonServer.create()

//middleware to parse the json formate
const middleware = jsonServer.defaults()

//setting a path to store data
const router = jsonServer.router('db.json')

mediaplayerserver.use(middleware)
mediaplayerserver.use(router)

//3) port for the server
const PORT = 4000 || process.env.PORT

//4) to LISTEN to the REQUEST from the frintend for resolving that REQUEST
mediaplayerserver.listen(PORT, () => {
    console.log(`server running successfully at port number ${PORT}`);
})