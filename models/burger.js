module.exports = function(sequelize, DataTypes){
    const Burger = sequelize.define("Burger", {
        burger_name:{
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                len: [1]
            }
        }, 
        devoured: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false,
            allowNull: false, 
            validate: {
                len: [1]
            }
        }
    // }
    // , {
    //     classMethod: {
    //         associate: function(models){
    //             Post.belongsTo(models.Author, 
    //             {
    //                 onDelete: "CASCADE", 
    //                 foreignKey:{
    //                     allowNull: false
    //                 }
    //             });
    //         }
    //     }
    });
    return Burger;
};