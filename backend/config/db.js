import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lalamit772:772335@cluster0.krajqqp.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};
