import Class from "../../model/classModal.js";
import Subject from "../../model/subjectModel.js";
import User from "../../model/userModel.js";
import Video from "../../model/VedioModal.js";
import generateToken from "../../utils/generateToken.js";

//mutation

//add a student by admin
export async function addStudent(parent, args) {
    const { name, email, password, std } = args;

    const userExists = await User.findOne({ email })

    if (userExists) {
        throw new Error("User already exists")
    }

    const user = await User.create({
        name,
        email,
        password,
        enrollment: std
    })
    if (user) {
        return user;
    }
}
export async function addNewClass(parent, args) {
    const newClass = await Class.create({
        class: args.class,
    })
    if (newClass) return newClass;
}

export async function addNewSubject(parent, args) {
    const newSubject = await Subject.create({
        subject: args.subject,
    })
    if (newSubject) {
        const res = await Class.findById(args.id)
        if (res) {
            console.log(res)
            res.subjects.push(newSubject._id)
            await res.save()
        } else {
            throw new Error("invalid class")
        }
        return newSubject
    }
}

export async function addNewVedio(parent, args) {
    console.log(args)
    const vedio = await Video.create({
        subject: args.id,
        title: args.title,
        description: args.description,
        url: args.url,
    })
    if (vedio) {
        const subject = await Subject.findById(args.id);
        if (subject) {
            subject.videos.push(vedio._id)
            subject.save()
        } else {
            throw new Error("invalid subject id")
        }
        return vedio
    }
}

export async function UserLogin(parent, args) {
    const { email, password } = args;
    const user = await User.findOne({ email })
    if (user && user.matchPassword(password)) {
        const classRoom = await Class.findById(user.enrollment)
        if (classRoom) {
            return ({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                stdID: user.enrollment,
                std:classRoom.class,
                token: generateToken(user._id),
            })
        }else{
            throw new Error("Classroom does not exist")
        }

    } else {
        throw new Error("Student does not exist")
    }
}

//queries

export async function AllClasses() {
    const classes = Class.find({}).sort({ class: 1 });
    return classes
}
