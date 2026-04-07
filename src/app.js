import express from "express";
import cors from "cors";
import docRoutes from "./routes/doc.routes.js";
import askRoutes from "./routes/ask.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/auth", authRoutes);
app.use("/api/docs", docRoutes);
app.use("/api/ask", askRoutes);

app.use((req, res) => {
  console.log("Route not found:", req.method, req.url);
  res.status(404).send("Route not found");
});

app.use(errorHandler)
export default app;