import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Subject'

    }
}, { timestamps: true });

const Video = mongoose.model('Videos', videoSchema);
export default Video;