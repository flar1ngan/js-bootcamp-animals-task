import birdModel from "../models/birdModel.js";
import catModel from "../models/catModel.js";
import dogModel from "../models/dogModel.js";
import favoritePlaceModel from "../models/favoritePlaceModel.js";

export const createPlace = async(req,res) => {
    try {
        const newPlace = new favoritePlaceModel({ ...req.body });
        const birds = await birdModel.find({});
        const cats = await catModel.find({});
        const dogs = await dogModel.find({});
        const filteredBirds = birds.filter(bird => bird.favoritePlace == newPlace.place);
        const filteredCats = cats.filter(cat => cat.favoritePlace == newPlace.place);
        const filteredDogs = dogs.filter(dog => dog.favoritePlace == newPlace.place);
        newPlace.animal = [filteredBirds, filteredCats, filteredDogs];
        console.log(newPlace);
        await newPlace.save();
        res.status(201).send("new place created");
    } catch (error) {
        res.status(405).send(error);
        console.log(error);
        
    }
}

export const getAllPlaces = async (req, res) => {
    try {
      const allPlaces = await favoritePlaceModel.find({});
      res.status(202).json(allPlaces);
    } catch (error) {
      console.error(error);
    }
  };

  export const updatePlaceById = async (req, res) => {
    try {
      const updatedPlace = await favoritePlaceModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedPlace);
    } catch (error) {
      console.error(error);
    }
  };
