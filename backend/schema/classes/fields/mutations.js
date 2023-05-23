import { GraphQLNonNull, GraphQLString } from "graphql";
import { addStudent } from "../resolver.js";
import { UserType } from "../type.js";

export const addUser = {
    type: UserType,
    description: 'Add user',
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        std: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve: addStudent
}