import  express  from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv'

dotenv.config()

connectDB()

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



const port = process.env.PORT; // You can change this to any port number you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
