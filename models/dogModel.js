import mongoose from "mongoose";

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  isAggressive: {
    type: Boolean,
  },
  isSocialDog: {
    type: Boolean,
  },
  canFly: {
    type: Boolean,
    default: false,
  },
  favoriteToys: {
    type: [String],
  },
  favoritePlace: {
    type: String,
  },
  isBoss: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Dog", DogSchema);
