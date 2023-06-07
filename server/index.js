import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import recipeRoutes from "./routes/Recipes.js";

const app = express();
app.use("/recipes", recipeRoutes);

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://vaghelaabhishek2580:Abhi2908763@cluster01munchapp.g9ekfpv.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on Port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));