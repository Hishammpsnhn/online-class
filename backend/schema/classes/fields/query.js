import { GraphQLID, GraphQLInt, GraphQLList } from "graphql";
import { ClassesType, SubjectsType, VedioType } from "../type.js";
import { AllClasses } from "../resolver.js";
import Class from "../../../model/classModal.js";
import Subject from "../../../model/subjectModel.js";
import Video from "../../../model/VedioModal.js";

export const classes = {
    type: GraphQLList(ClassesType),
    description: 'list of all classes',
    resolve: AllClasses
}

export const subjects = {
    type: GraphQLList(SubjectsType),
    description: 'list of subjects on particular class',
    args: {
        id: { type: GraphQLID }
    },
    resolve: async (parent, args) => {
        const classs = await Class.findById(args.id)
        if (classs) {
            return classs.subjects.map((subjectID) => {
                return Subject.findById(subjectID);
            }) 
        } else {
            throw new Error("invalid class")
        }
    },
}

export const vedios = {
    type: GraphQLList(VedioType),
    description: 'list of vedios on particular subject',
    args: {
        id: { type: GraphQLID }
    },
    resolve: async (parent, args) => {
        const vedios = await Video.find({subject:args.id})
        return vedios
    },
}