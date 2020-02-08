const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

let tiendas = [
    {
        id: 1,
        name: 'Superama',
        tipoTienda: 'Abarrotes'
    },
    {
        id: 2,
        name: 'Chedraui',
        tipoTienda: 'Linea Blanca'
    },
    {
        id: 3,
        name: 'Suburbia',
        tipo: 'Ropa'
    }
]

const tiendaType = new GraphQLObjectType({
    name: 'tienda',
    files: ()=>({
        id: {
            type:GraphQLString,
        },
        name:{
            type:GraphQLString,
        },
        tipoTienda:{
            type:GraphQLString,
        }
    })
});

const RootQuery  = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: ()=>({
        tienda:{
            type:tiendaType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parent, args){
                return tiendas.find(tienda => tienda.id === args.id)
            }
        }
    }) 
})

module.exports = new GraphQLSchema({
    query: RootQuery
})