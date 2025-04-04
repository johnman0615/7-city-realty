import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth-routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

