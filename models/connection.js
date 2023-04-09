const mongoose = require("mongoose");

// const connectionString = process.env.CONNECTION_STRING;

mongoose
  .connect(
    "mongodb+srv://Yelizze:FnOFDTMFDUa7M8O5@cluster0.1szr3tu.mongodb.net/hackatweet",
    { connectTimeoutMS: 2000 }
  )
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
