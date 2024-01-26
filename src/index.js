require("dotenv").config();
const express = require("express");
const cors = require("cors");

const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/notFound");
const createError = require("./utils/createError");

const authRoute = require("./routes/auth-route");
const productRoute = require("./routes/product-route");
const adminRoute = require("./routes/admin-route");
const authenticate = require("./middlewares/authenticate");
const admin = require("./middlewares/admin");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/admin", authenticate, admin, adminRoute);

app.use(errorHandler);
app.use("*", notFoundHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server run on port" + " " + port);
});
