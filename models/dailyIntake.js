module.exports = function (sequelize, Datatypes) {
  var DailyIntake = sequelize.define("DailyIntake", {
    name_of_food: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  DailyIntake.associate = function (models) {
    DailyIntake.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        onDelete: "cascade",
      },
    });

    DailyIntake.hasMany(models.Nutrients, {
      onDelete: "cascade",
    });
  };
  return DailyIntake;
};
