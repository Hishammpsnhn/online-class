import { GraphQLInt, GraphQLList } from "graphql";
import { ClassesType, SubjectsType, VedioType } from "../type.js";

export const classes = {
    type: GraphQLList(ClassesType),
    description: 'list of all classes',
     resolve: () => []
}

export const subjects = {
    type: GraphQLList(SubjectsType),
    description: 'list of subjects on particular class',
    args: {
        id: { type: GraphQLInt }
    },
    resolve: () => []
//     resolve: (parent, args) => {
//         const classs = classes.find(classs => classs.id === args.id)
//         return classs.subjectsIDs.map((subjectID) => {
//             return subjects.find(subject => subject.id == subjectID);
//         })
//     },
}

export const vedios = {
    type: GraphQLList(VedioType),
    description: 'list of vedios on particular subject',
    args: {
        id: { type: GraphQLInt }
    },
    // resolve: (parent, args) => {

    //     return vedios.filter((vedio) => vedio.subject == args.id)
    // },
}