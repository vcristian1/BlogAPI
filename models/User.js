import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    blogs:[
        {
            type: mongoose.Types.ObjectId, 
            ref: "Blog", 
            required: true
        }
    ]
});

//Now we are exporting the collection and schema
export default mongoose.model("User", userSchema);