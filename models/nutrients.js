module.exports = function (sequelize, DataTypes) {
  var Nutrients = sequelize.define("Nutrients", {
    protein: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    carbs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    fats: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    fiber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    calories: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });

  Nutrients.associate = function (models) {
    Nutrients.belongsTo(models.DailyIntake, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Nutrients;
};
