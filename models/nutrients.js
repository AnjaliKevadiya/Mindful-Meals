module.exports = function (sequelize, DataTypes) {
  var Nutrients = sequelize.define("Nutrients", {
    protein: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    carbs: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    fats: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    fiber: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    calories: {
      type: DataTypes.DECIMAL(10,2),
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
