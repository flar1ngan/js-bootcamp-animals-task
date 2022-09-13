import catModel from "../models/catModel.js";

export const createCat = async (req, res) => {
    try {
      const newCat = new catModel({ ...req.body });
      await newCat.save();
      res.status(201).send("new cat created");
    } catch (error) {
      res.status(405).send(error);
      console.log(error);
    }
  };
  
  export const updateCatByName = async (req, res) => {
    try {
      const updatedCat = await catModel.findOneAndUpdate(
        { name: req.params.name },
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedCat);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const updateCatById = async (req, res) => {
    try {
      const updatedCat = await catModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedCat);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getCatById = async (req, res) => {
    try {
      const user = await catModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getCatByName = async (req, res) => {
    try {
      const user = await catModel.findOne({ name: req.params.name });
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getAllCats = async (req, res) => {
    try {
      const allCats = await catModel.find({});
      res.status(202).json(allCats);
    } catch (error) {
      console.error(error);
    }
  };
  
  export const deleteCatById = async (req, res) => {
      try {
        await catModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`cat with id ${req.params.id} deleted`);
      } catch (error) {
        console.error(error);
      }
    };
  
  export const deleteCatByName = async (req, res) => {
      try {
        await catModel.findOneAndDelete({name: req.params.name});
        res.status(200).send(`cat with name ${req.params.name} deleted`);
      } catch (error) {
        console.error(error);
      }
    };
  