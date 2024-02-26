import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({ path:  './.env' });

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Database connection successful");
      console.log(process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });