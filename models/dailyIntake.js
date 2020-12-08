module.exports = function(sequelize, Datatypes) {
    var DailyIntake = sequelize.define("DailyIntake", {
        intake_id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name_of_food: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    DailyIntake.associate = function(models) {
        DailyIntake.belongsTo(models.Nutrients, {
            foreignKey: "nutrientId",
            target: "nutrient_id"
        });
        DailyIntake.hasMany(models.User, {
            onDelete: "cascade"
        });

    };
    return DailyIntake;
};