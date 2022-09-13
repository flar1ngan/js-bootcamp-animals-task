import dogModel from "../models/dogModel.js";

export const createDog = async (req, res) => {
    try {
      const newDog = new dogModel({ ...req.body });
      await newDog.save();
      res.status(201).send("new dog created");
    } catch (error) {
      res.status(405).send(error);
      console.log(error);
    }
  };
  
  export const updateDogByName = async (req, res) => {
    try {
      const updatedDog = await dogModel.findOneAndUpdate(
        { name: req.params.name },
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedDog);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const updateDogById = async (req, res) => {
    try {
      const updatedDog = await dogModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedDog);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getDogById = async (req, res) => {
    try {
      const user = await dogModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getDogByName = async (req, res) => {
    try {
      const user = await dogModel.findOne({ name: req.params.name });
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getAllDogs = async (req, res) => {
    try {
      const allDogs = await dogModel.find({});
      res.status(202).json(allDogs);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const deleteDogById = async (req, res) => {
      try {
        await dogModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`dog with id ${req.params.id} deleted`);
      } catch (error) {
        console.error(error);
      }
    };
  
  export const deleteDogByName = async (req, res) => {
      try {
        await dogModel.findOneAndDelete({name: req.params.name});
        res.status(200).send(`dog with name ${req.params.name} deleted`);
      } catch (error) {
        console.error(error);
      }
    };
  