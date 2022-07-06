const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const filterRoutes = require("./routes/filterRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use("/api/users", userRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/search", filterRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
