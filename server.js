const express = require('express')
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql')

const app = express(); // creating the app
app.use('/graphql', graphqlHTTP({

graphiql: true,  // for developer playground to execute and test quesries
schema: schema,  // contains actual code for various queries/mutations
rootValue: root
})
);  