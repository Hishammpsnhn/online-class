import express from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors'
import schema from "./schema/index.js";
import { graphqlHTTP } from 'express-graphql';

dotenv.config()

connectDB()

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP(()=>({
  schema,
  graphiql: true
})));



app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.PORT; // You can change this to any port number you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
