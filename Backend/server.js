const express = require("express");
const cors = require("cors");
const recommendRoute = require("./routes/recommend");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/recommendations", recommendRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
