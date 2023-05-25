import mongoose from "mongoose";
import dontenv from "dotenv";
dontenv.config();



const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbConnection = mongoose
  .connect("mongodb+srv://twitter:twitter123@qurbanamashov.1dopos5.mongodb.net/?retryWrites=true&w=majority", options)
  .then((result) => console.log("Database connection is success."))
  .catch((err) => console.log(err));

export default dbConnection;
