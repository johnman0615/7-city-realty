import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth-routes";
import propertyRoutes from "./routes/api/property-routes";
import sequelize from "./config/connection";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/properties", propertyRoutes);

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

