const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

(async () => {
  mongoose.connection.on("error", (error) => console.error(error));
  mongoose.connection.on("connected", () =>
    console.log("Connected to database")
  );
  await mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
})();

module.exports = require("./repository/user-repository");
