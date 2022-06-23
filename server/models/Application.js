
module.exports = (sequelize, DataTypes) => {

    const Application = sequelize.define('application', {
        // Model attributes are defined here
       
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
       email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
          },
          cover_letter: {
            type: DataTypes.STRING,
            allowNull: true
          },
          github: {
            type: DataTypes.STRING,
            allowNull: true
          },
          linkedin: {
            type: DataTypes.STRING,
            allowNull: true
          },
          cv: {
            type: DataTypes.STRING,
            allowNull: true
          },
          recruiter_id: {
            type: DataTypes.STRING,
            allowNull: true
          }
         
      })

    return Application

}