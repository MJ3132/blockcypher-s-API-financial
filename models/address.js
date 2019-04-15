module.exports = function (sequelize , DataTypes){
    const Transaction = sequelize.define('Transaction', {

        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        balance: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalReceived: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalSent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        finalBalance: {
            type: DataTypes.STRING,
            allowNull: false
        }
    
    });

    return Transaction
};



