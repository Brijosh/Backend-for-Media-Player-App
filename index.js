// import json server
const jsonServer=require('json-server')

// create a server for media player app using json-server
const mediaApp=jsonServer.create()

// create middleware using jsonServer
const middleware=jsonServer.defaults()

// setup routes for db.json
const route=jsonServer.router('db.json')

// set up port for running server
const PORT=3000||process.env.PORT

mediaApp.use(middleware)
mediaApp.use(route)
// run server
mediaApp.listen(PORT,()=>{
    console.log('port-',PORT);
    
})