module.exports = function (sequelize, Datatypes) {
  var Contact = sequelize.define("Contact", {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phonenumber: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    message: {
      type: Datatypes.TEXT,
      allowNull: false,
    },
  });
  return Contact;
};
