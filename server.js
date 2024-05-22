import app from "./app.js";
import { connectDB } from "./config/database.js";
import Razorpay from "razorpay";
connectDB();
const port = process.env.PORT || 5000;
   
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.get("/",(req,res,next)=>{
    res.send("Working");
})

app.listen(port, () => {
  console.log(`Server is working on PORT: ${port} in ${process.env.NODE_ENV} MODE`);
});
