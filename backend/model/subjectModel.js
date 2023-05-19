import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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