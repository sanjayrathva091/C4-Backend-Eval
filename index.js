require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db.config");
const userRouter = require("./routes/users.routes");
const postsRouter = require("./routes/posts.routes");

const app = express();

// use middlewares
app.use(cors());
app.use(express.json());

// use routes
app.use("/api/auth/users", userRouter);
app.use("/api/posts", postsRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    connectDB();
    console.log(`The server listening on port ${PORT}`);
});