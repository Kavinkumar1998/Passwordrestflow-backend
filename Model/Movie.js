import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    Poster:{
        type:String,
        required:true,
    },
    About:{
        type:String,
        required:true
    },
    Trailer:{
        type:String,
        required:true,
    },
    Released:{
        type:String,
        required:true,
    }
    
});

const Movie = mongoose.model("Movie",movieSchema);

export {Movie}