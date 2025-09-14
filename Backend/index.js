import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import profileRoutes from "./routes/profile.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const corsOptions = {
  origin: 'http://localhost:5173/profile',
  Credentials: true
};

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/api/profile", profileRoutes, (req, res) =>{
   const {name , email, phone, location} = req.body
  console.log("Data: ", name, email, phone, location);
})

app.post("/api/profile", profileRoutes, (req, res) => {
 const {name , email, phone, location} = req.body
 console.log("Profile Updated: ", name, email, phone, location);

 res.json({message: "Profile Saved Successfully", data: req.body});
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});