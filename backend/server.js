import express from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql';
import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString, buildSchema } from 'graphql';

const classes = [
  { id: 1, class: 1, description: 'welcome to one class', subjectsIDs: [1, 4] },
  { id: 2, class: 2, description: 'welcome to two class', subjectsIDs: [2, 5] },
  { id: 3, class: 3, description: 'welcome to third class', subjectsIDs: [3] },
  { id: 4, class: 4, description: 'welcome to fourth class', subjectsIDs: [] },
]

const subjects = [
  { id: 1, name: 'english', url: 'https://www.shutterstock.com/shutterstock/photos/1191427996/display_1500/stock-vector-english-open-book-with-language-hand-drawn-doodles-and-lettering-on-white-background-education-1191427996.jpg', vedioIDs: [1, 2] },
  { id: 2, name: 'english', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVwVMf3T66kzgbyJPcFj2lPgskOo92o8EgbXneprCJAZIExaF5aAOjwdZqgXl2UeQyxPneoWipUw&usqp=CAU&ec=48600112', vedioIDs: [] },
  { id: 3, name: 'english', url: 'https://oxfordsummercourses.com/static/8824d11a0c2c5b04069cfbb73558a1ef/2e781/Blog_Image_83_db756fe209.webp', vedioIDs: [] },
  { id: 4, name: 'maths', url: 'https://img.freepik.com/premium-vector/open-book-icons-mathematics_74440-842.jpg?w=360', vedioIDs: [] },
  { id: 5, name: 'science', url: 'https://thumbs.dreamstime.com/z/science-books-shelf-open-book-glasses-lettering-science-books-shelf-open-book-glasses-lettering-white-135179577.jpg', vedioIDs: [3] },
]

const vedios = [
  { id: 1, title: 'chapter one', description: 'one class,english', subject: 1 },
  { id: 2, title: 'chatpter two', description: 'one class,english', subject: 1 },
  { id: 3, title: 'chapter one', description: 'two class,science', subject: 5 },
]


dotenv.config()

// connectDB()

const app = express();

app.use(cors());

const ClassesType = new GraphQLObjectType({
  name: 'Class',
  description: 'This represents a classes',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    class: { type: GraphQLNonNull(GraphQLInt) },
    description: { type: GraphQLString },
    subjectsIDs: { type: GraphQLList(GraphQLInt) },
    subjects: {
      type: new GraphQLList(SubjectsType),
      resolve: (classes) => {
        return classes.subjectsIDs.map((subjectID) => {
          return subjects.find(subject => subject.id == subjectID);
        })
      }
    }
  })
})

const SubjectsType = new GraphQLObjectType({
  name: 'Subject',
  description: 'This represents a author of a book',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    url: { type: GraphQLString },
    vedioIDs: { type: GraphQLList(GraphQLInt) },
    vedios: {
      type: new GraphQLList(VedioType),
      resolve: (subjects) => {
        return subjects.vedioIDs.map((vedioID) => {
          return vedios.find(vedio => vedio.id == vedioID);
        })
      }
    }
  })
})
const VedioType = new GraphQLObjectType({
  name: 'Vedio',
  description: 'This represents Vedio',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLNonNull(GraphQLString) },
    subject: { type: GraphQLInt },
    description: { type: GraphQLString },
  })
})
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    classes: {
      type: GraphQLList(ClassesType),
      description: 'list of all classes',
      resolve: () => classes
    },
    subjects: {
      type: GraphQLList(SubjectsType),
      description: 'list of subjects on particular class',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => {
        const classs = classes.find(classs=>classs.id === args.id) 
        return classs.subjectsIDs.map((subjectID) => {
          return subjects.find(subject => subject.id == subjectID);
        })
      },
    },
    vedios: {
      type: GraphQLList(VedioType),
      description: 'list of vedios on particular subject',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => {
       
       return vedios.filter((vedio) => vedio.subject == args.id)
      },
    }

  })
})

const schema = new GraphQLSchema({
  query: RootQueryType
})

app.use('/graphql', graphqlHTTP({
  // pass in a schema property
  schema,
  graphiql: true
}));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.PORT; // You can change this to any port number you prefer
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
