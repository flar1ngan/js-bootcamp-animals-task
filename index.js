import express from "express";
import connectionToMongo from "./utils/connection.js";
import birdRoute from "./routes/birdRoute.js"
import catRoute from "./routes/catRoute.js"
import dogRoute from "./routes/dogRoute.js"
import favoritePlaceRoute from "./routes/favoritePlaceRoute.js"

const app = express();
const port = 3002;

app.use(express.json());

app.use("/birds", birdRoute);
app.use("/cats", catRoute);
app.use("/dogs", dogRoute);
app.use("/place", favoritePlaceRoute);

app.listen(port, () => {
  connectionToMongo();
  console.log(`Example app listening on port ${port}`);
});

