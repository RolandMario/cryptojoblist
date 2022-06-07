
module.exports = (sequelize, DataTypes) => {

    const Recruiter = sequelize.define('recruiter', {
        // Model attributes are defined here
        walletAddress: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
       email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
      })

    return Recruiter

}