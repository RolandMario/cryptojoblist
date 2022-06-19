
module.exports = (sequelize, DataTypes) => {

    const Candidiate = sequelize.define('candidiate', {
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
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
          },
          job_title: {
            type: DataTypes.STRING,
            allowNull: true
          },
          residential_address: {
            type: DataTypes.STRING,
            allowNull: true
          },
          website: {
            type: DataTypes.STRING,
            allowNull: true
          },
          phone: {
            type: DataTypes.STRING,
            allowNull: true
          },
          country: {
            type: DataTypes.STRING,
            allowNull: true
          },
          state: {
            type: DataTypes.STRING,
            allowNull: true
          },
          city: {
            type: DataTypes.STRING,
            allowNull: true
          },
          zip_code: {
            type: DataTypes.STRING,
            allowNull: true
          },
          google: {
            type: DataTypes.STRING,
            allowNull: true
          },
          twitter: {
            type: DataTypes.STRING,
            allowNull: true
          },
          linkedin: {
            type: DataTypes.STRING,
            allowNull: true
          },
          github: {
            type: DataTypes.STRING,
            allowNull: true
          }
      })

    return Candidiate

}