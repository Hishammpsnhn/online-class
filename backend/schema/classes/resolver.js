import User from "../../model/userModel.js";

//add a student by admin
export async function addStudent(parent, args) {
    console.log(args)
    const user = await User.create({
        name: args.name,
        email: args.email,
        password: args.password,
        enrollment: args.std
    })
    if (user) {
        return user;
    }
}