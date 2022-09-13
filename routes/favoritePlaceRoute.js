import express from "express";
import { createPlace, getAllPlaces, updatePlaceById } from "../controllers/favoritePlaceController.js";

const router = express.Router();

router.post("/create", createPlace);

router.get("/get", getAllPlaces);

router.put("/update/:id", updatePlaceById);


export default router;