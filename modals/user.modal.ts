import { timeStamp } from "console";
import {Schema, model, models} from "mongoose"

const UserSchema = new Schema({
    clerkId:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
    },

}, 
{
    timestamps: true,
});

const User = models?.User || model("User", UserSchema);

export default User;