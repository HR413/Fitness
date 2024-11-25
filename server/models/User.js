import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique:true,
    },
    weight:{
        type : Number,
        default : null,
    },
    height:{
        type : Number,
        default : null,
    },
    
    age:{
        type : Number,
        required : true,
    },
} 


);

export default mongoose.model("User",UserSchema);