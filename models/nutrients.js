module.exports = function(sequelize, DataTypes) {
    var Nutrients = sequelize.define("Nutrients", {
        nutrient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        protein: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        
        carbs: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        fats: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        fiber: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        calories: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });

    return Nutrients;
};