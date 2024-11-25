import mongoose from "mongoose"

const WorkoutSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique:true,
    },
    image:{
        type : String,
        default : null,
    },
    age:{
        type : Number,
        required : true,
    },
   
} 


);

export default mongoose.model("User",WorkoutSchema);