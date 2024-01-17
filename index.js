const dotenv = require("dotenv");
const connectDB = require("./db/connectDB.js");
const { app } = require("./app.js");

dotenv.config();
// dotenv.config({
//   path: "./.env",
// });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MOngo connection faild : ", error);
  });
