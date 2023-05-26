import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }]
},
    {
        timestamps: true,
    }
);
const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;