import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(3000, () => console.log(`app listening on port ${port}`));
