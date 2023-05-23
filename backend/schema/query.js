import { GraphQLObjectType } from "graphql";
import {classes,subjects,vedios} from './classes/fields/query.js'

const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields:{
         classes,subjects,vedios
    }
})

export default query
