import birdModel from "../models/birdModel.js";

export const createBird = async (req, res) => {
  try {
    const newBird = new birdModel({ ...req.body });
    await newBird.save();
    res.status(201).send("new bird created");
  } catch (error) {
    res.status(405).send(error);
    console.log(error);
  }
};

export const updateBirdByName = async (req, res) => {
  try {
    const updatedBird = await birdModel.findOneAndUpdate(
      { name: req.params.name },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBird);
  } catch (error) {
    console.error(error);
  }
};

export const updateBirdById = async (req, res) => {
  try {
    const updatedBird = await birdModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBird);
  } catch (error) {
    console.error(error);
  }
};

export const getBirdById = async (req, res) => {
  try {
    const user = await birdModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
};

export const getBirdByName = async (req, res) => {
  try {
    const user = await birdModel.findOne({ name: req.params.name });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
};

export const getAllBirds = async (req, res) => {
  try {
    const allBirds = await birdModel.find({});
    res.status(202).json(allBirds);
  } catch (error) {
    console.error(error);
  }
};

export const deleteBirdById = async (req, res) => {
    try {
      await birdModel.findByIdAndDelete(req.params.id);
      res.status(200).send(`bird with id ${req.params.id} deleted`);
    } catch (error) {
      console.error(error);
    }
  };

export const deleteBirdByName = async (req, res) => {
    try {
      await birdModel.findOneAndDelete({name: req.params.name});
      res.status(200).send(`bird with name ${req.params.name} deleted`);
    } catch (error) {
      console.error(error);
    }
  };
