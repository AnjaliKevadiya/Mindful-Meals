module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allownull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allownull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allownull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    height: {
      type: DataTypes.STRING,
      allownull: false,
    },
    weight: {
      type: DataTypes.DECIMAL,
      allownull: false,
    },
    no_of_active_days: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    lose_or_gain_weight: {
      type: DataTypes.STRING,
      allownull: false,
    },
  });

  User.associate = function (models) {
    User.belongsTo(models.DailyIntake, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return User;
};
