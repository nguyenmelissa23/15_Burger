module.exports = function(sequelize, DataTypes){
    var Customer = sequelize.define("Customer", {
        name: DataTypes.STRING
    },{
        classMethods: {
            associate: function(models){
                Customer.hasMany(models.Burger);
            }
        }
    });
    return Customer;
};