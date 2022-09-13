import express from "express";
import { createBird, updateBirdById, updateBirdByName, getBirdById, getBirdByName, getAllBirds, deleteBirdById, deleteBirdByName } from "../controllers/birdsController.js";

const router = express.Router();

router.post("/create", createBird);

router.put("/updatebyname/:name", updateBirdByName);

router.put("/updatebyid/:id", updateBirdById);

router.get("/getbyname/:name", getBirdByName);

router.get("/getbyid/:id", getBirdById);

router.get("/get", getAllBirds);

router.delete("/deletebyname/:name", deleteBirdByName);

router.delete("/deletebyid/:id", deleteBirdById);


export default router;