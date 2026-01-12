import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/myRouter.js";

const app = express();

app.use(express.json()); // used for decryption of data
app.use("/auth", AuthRouter); //

app.get("/", (req, res) => {
  console.log("Server is running");
  res.json({ message: "Server isn running successfully" });
});
// default error handler
app.use((err ,req ,res ,next) =>
{
    const ErrorMessage = err.message || "Internal Server Error";
    const StatusCode = err.statuscode || 500;

    res.status(StatusCode).json({message : ErrorMessage});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at port ", port);
  connectDB();
});
