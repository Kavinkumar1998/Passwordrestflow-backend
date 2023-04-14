import express from "express";
import { Movie } from "../Model/Movie.js";

const router= express.Router();

//router for adding anime data 
router.post("/addmovie",async(req,res)=>{
    try{
const {Title,Poster,About,Trailer,Released} = req.body;
const movie = await new Movie(req.body).save();
res.status(200).json({message:"Movie Added successfully"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internl Server Error"})
    }
})

///router for getting movie data

router.get("/getmovies",async(req,res)=>{
    try{
const movie = await Movie.find()
res.status(200).json(movie);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
})


export const movieRouter = router ;