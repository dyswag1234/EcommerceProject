const mdb = require("mongoose");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

const userSchema = new mdb.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.comparePassword = (password) => {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
