import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This represents a User',
    fields: () => ({
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        std: { type: GraphQLNonNull(GraphQLInt) },
    })
})

export const UserLoginType = new GraphQLObjectType({
    name: 'UserLogin',
    description: 'This represents a User login',
    fields: () => ({
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        stdID: { type: GraphQLNonNull(GraphQLID) },
        std: { type: GraphQLNonNull(GraphQLInt) },        
        isAdmin: { type: GraphQLNonNull(GraphQLBoolean)},
        token:{type:GraphQLString}
    })
})
export const ClassesType = new GraphQLObjectType({
    name: 'Class',
    description: 'This represents a classes',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        class: { type: GraphQLNonNull(GraphQLInt) },
        subjects: { type: GraphQLList(GraphQLID) },
        // subjects: {
        //     type: new GraphQLList(SubjectsType),
        //     resolve: (classes) => {
        //         return classes.subjectsIDs.map((subjectID) => {
        //             return subjects.find(subject => subject.id == subjectID);
        //         })
        //     }
        // }
    })
})

export const SubjectsType = new GraphQLObjectType({
    name: 'Subject',
    description: 'This represents a author of a book',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        subject: { type: GraphQLNonNull(GraphQLString) },
        videos: { type: GraphQLList(GraphQLID) },
        // vedios: {
        //     type: new GraphQLList(VedioType),
        //     resolve: (subjects) => {
        //         return subjects.vedioIDs.map((vedioID) => {
        //             return vedios.find(vedio => vedio.id == vedioID);
        //         })
        //     }
        // }
    })
})
export const VedioType = new GraphQLObjectType({
    name: 'Vedio',
    description: 'This represents Vedio',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLNonNull(GraphQLString) },
        subject: { type: GraphQLNonNull(GraphQLID) },
        description: { type: GraphQLString },
        url: { type: GraphQLNonNull(GraphQLString) },
    })
})