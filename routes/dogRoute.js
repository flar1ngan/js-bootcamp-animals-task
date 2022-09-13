import express from "express";
import { createDog, updateDogById, updateDogByName, getDogById, getDogByName, getAllDogs, deleteDogById, deleteDogByName } from "../controllers/dogsController.js";

const router = express.Router();

router.post("/create", createDog);

router.put("/updatebyname/:name", updateDogByName);

router.put("/updatebyid/:id", updateDogById);

router.get("/getbyname/:name", getDogByName);

router.get("/getbyid/:id", getDogById);

router.get("/get", getAllDogs);

router.delete("/deletebyname/:name", deleteDogByName);

router.delete("/deletebyid/:id", deleteDogById);


export default router;