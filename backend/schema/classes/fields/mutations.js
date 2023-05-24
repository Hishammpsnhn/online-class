import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { addNewClass, addNewSubject, addNewVedio, addStudent } from "../resolver.js";
import { ClassesType, SubjectsType, UserType, VedioType } from "../type.js";

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

export const addClass = {
    type: ClassesType,
    description: 'Add class',
    args: {
        class: { type: GraphQLNonNull(GraphQLInt) },
        subjectsIDs: { type: GraphQLList(GraphQLInt) },
    },
    resolve: addNewClass
}

export const addSubject = {
    type: SubjectsType,
    description: 'Add subject',
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        subject: { type: GraphQLNonNull(GraphQLString) },
        // vedioIDs: { type: GraphQLList(GraphQLInt) },
    },
    resolve: addNewSubject
}

export const addVedio = {
    type: VedioType,
    description: 'Add vedio',
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        url: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: addNewVedio
}