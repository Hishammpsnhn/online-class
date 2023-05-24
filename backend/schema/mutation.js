import { GraphQLObjectType } from "graphql";
import {addClass, addUser,addVedio,addSubject} from './classes/fields/mutations.js'

const mutation = new GraphQLObjectType({
    name: 'RootMutation',
    description: 'Root mutation',
    fields: {
         addUser,
        addClass,
        addSubject,
        addVedio
    }
});

export default mutation