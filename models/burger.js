module.exports = function(sequelize, DataTypes){
    const Burger = sequelize.define("Burger", {
        burger_name:{
            type: DataTypes.STRING
        }
    });
    return Burger;
};