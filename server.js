const express = require('express')
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql')

console.log('sdsdf');
const app = express(); // creating the app

const schema = buildSchema(`
type user
{
    name:String,
    age: Int
}
type Query { 
    hello: String
    welcomeMsg(name:String, dayOfWeek:String):String
    getUsers:[user]
} 

type Mutation
{
    createUser(name:String, age:Int):[user]
}
`);

let users = [{name:"sanaa", age:4}];

const root = {
hello: () => {return 'hello world!'},
welcomeMsg: (args) => {return (`Welcome ${args.name}!, today is ${args.dayOfWeek}`);},
getUsers: ()=>{return users},
createUser: ({name, age}) => {users.push({name, age}); console.log(users); return users; }
}

app.use('/graphql', graphqlHTTP({

graphiql: true,  // for developer playground to execute and test quesries
schema: schema,  // contains actual code for various queries/mutations
rootValue: root
})
);  

app.listen(4000, ()=> console.log('server is on port 4000')); 
