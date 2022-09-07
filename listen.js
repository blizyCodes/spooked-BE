require("dotenv").config();
const app = require("./app");
const db = require("./db/connect");
const PORT = process.env.PORT;

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening...`);
  });
}).catch((error) => {
  console.log(error);
});
