import mongoose from 'mongoose'

const classSchema = mongoose.Schema(
    {
        class: { type: Number, required: true },
        subjects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject'
        }]
    },
    {
        timestamps: true,
    }
)

const Class = mongoose.model('Class', classSchema)

export default Class