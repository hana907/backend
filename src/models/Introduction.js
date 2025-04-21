import mongoose from "mongoose";

const IntroductionSchema = new mongoose.Schema(
    
    {
    title:{
        type: String,
        required: true,
        unique: true,
    },
    image:{
        type: String,
        required: true,
        unique: true,
    },

    
},
{timestamps: true});

const Introduction = mongoose.model("Introduction", IntroductioSchema);

export default Introduction;