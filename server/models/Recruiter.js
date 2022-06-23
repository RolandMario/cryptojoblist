
module.exports = (sequelize, DataTypes) => {

    const Recruiter = sequelize.define('recruiter', {
        // Model attributes are defined here
        walletAddress: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        company_name:{
          type: DataTypes.STRING,
          allowNull: true
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
        website: {
          type: DataTypes.STRING,
          allowNull: true
        },
        company_size: {
          type: DataTypes.STRING,
          allowNull: true
        },
        contact_mail: {
          type: DataTypes.STRING,
          allowNull: true
        },
        job_title: {
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
        residential_address: {
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
        phone: {
          type: DataTypes.STRING,
          allowNull: true
        },
        facebook: {
          type: DataTypes.STRING,
          allowNull: true
        },
        linkedin: {
          type: DataTypes.STRING,
          allowNull: true
        },
        current_email: {
          type: DataTypes.STRING,
          allowNull: true
        },
        current_password: {
          type: DataTypes.STRING,
          allowNull: true
        },
        new_password: {
          type: DataTypes.STRING,
          allowNull: true
        },
       repeat_new_password: {
          type: DataTypes.STRING,
          allowNull: true
        },
        cover_logo: {
          type: DataTypes.STRING,
          allowNull: true
        }
      })

    return Recruiter

}