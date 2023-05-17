import  express  from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 4000; // You can change this to any port number you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
