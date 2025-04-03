import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth-routes";
import propertyRoutes from "./routes/api/property-routes";
import sequelize from "./config/connection";

dotenv.config();
console.log("Loaded ENV Variables:", process.env.DEFAULT_USERNAME, process.env.DEFAULT_PASSWORD);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/properties", propertyRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("Server is running!");
});

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});

