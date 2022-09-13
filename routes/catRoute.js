import express from "express";
import { createCat, updateCatById, updateCatByName, getCatById, getCatByName, getAllCats, deleteCatById, deleteCatByName } from "../controllers/catsController.js";

const router = express.Router();

router.post("/create", createCat);

router.put("/updatebyname/:name", updateCatByName);

router.put("/updatebyid/:id", updateCatById);

router.get("/getbyname/:name", getCatByName);

router.get("/getbyid/:id", getCatById);

router.get("/get", getAllCats);

router.delete("/deletebyname/:name", deleteCatByName);

router.delete("/deletebyid/:id", deleteCatById);


export default router;