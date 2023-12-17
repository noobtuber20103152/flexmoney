const mongoose = require("mongoose");

let ConnectToMongo = async () => {
  await mongoose.connect(
    "mongodb+srv://noobtuber:noobtuber@flexmoneyclustor.n59fnai.mongodb.net/"
  );
  console.log("Connected");
};

module.exports = ConnectToMongo;
