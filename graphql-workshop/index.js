const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
let puerto  = 3300;
const schema = require('./schemas/schemas')

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true
}))

app.listen(puerto, ()=>{
    console.log(`servidor corriendo en el puerto ${puerto}`);
    
});