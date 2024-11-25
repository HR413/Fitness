import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    category :{
        type : String,
        required : true,
    },
    workoutName:{
        type : String,
        required : true,
        
    },
    sets :{
        type : Number,
        default : null,
    },
    reps :{
        type : Number,
        required : true,
    },
    weights :{
        type : Number,
        required : true,
    },
    duration :{
        type : Number,
        required : true,
    },
    Date :{
        type : Date,
        default : Date.now ,
    },
   
} 


);

export default mongoose.model("User",UserSchema);