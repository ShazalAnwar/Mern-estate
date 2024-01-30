import mongoose from 'mongoose';
const userSchema = new mongooseSchema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},{timestamp: true});

const User = mongoose.model('user',userSchema);

export default User;