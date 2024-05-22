import app from "./app.js";
import { connectDB } from "./config/database.js";
import Razorpay from "razorpay";
import path from "path";
import { fileURLToPath } from "url";
connectDB();
const port = process.env.PORT || 5000;
   

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});
app.listen(port, () => {
  console.log(`Server is working on PORT: ${port} in ${process.env.NODE_ENV} MODE`);
});