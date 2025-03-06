const express = require("express");
const mongoose = require("./config/db");
const { protect } = require("./middleware/authMiddleware");
const cors = require("cors");
const dotenv = require("dotenv");
// const multer = require("multer");
const mobileOilSaleRouter = require("./routes/mobileOilSale");
const stockRouter = require("./routes/stock");
const expenditureRouter = require("./routes/expenditure");
const mobileOilStockRouter = require("./routes/mobileOilStock");
const salesRouter = require("./routes/sales");
const khataRouter = require("./routes/khataBookRoutes");
const reportRouter = require("./routes/reportRoutes");
const amanatRouter = require("./routes/amanatBookRoutes");
const dipRouter = require("./routes/dipRoutes");
const factoryRoutes = require("./routes/factoryRoutes");
const userRouter = require("./routes/userRoutes");
// const generateReport = require("./controllers/generateReport");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use("/api/user", userRouter);

app.use("/api/expenditure", protect, expenditureRouter);
app.use("/api/stock", protect, stockRouter);
app.use("/api/mobileOilStock", protect, mobileOilStockRouter);
app.use("/api/mobileOilSale", protect, mobileOilSaleRouter);
app.use("/api/sales", protect, salesRouter);
app.use("/api/khata", protect, khataRouter);
app.use("/api/reports", protect, reportRouter);
app.use("/api/amanat", protect, amanatRouter);
app.use("/api/dip", protect, dipRouter);
app.use("/api/factory", protect, factoryRoutes);

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// app.post(
//   "/api/generate-reports",
//   upload.single("pdf"),
//   generateReport.saveReport
// );

(async () => {
  try {
    // Start the server after updates are completed
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.error("Error during application startup:", error.message);
    process.exit(1); // Exit the process if there is a critical failure
  }
})();
