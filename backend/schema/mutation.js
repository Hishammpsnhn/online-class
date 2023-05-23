import { GraphQLObjectType } from "graphql";
import {addUser} from './classes/fields/mutations.js'

const mutation = new GraphQLObjectType({
    name: 'RootMutation',
    description: 'Root mutation',
    fields: {
        addUser
    }
});

export default mutation