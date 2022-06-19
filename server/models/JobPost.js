
module.exports = (sequelize, DataTypes) => {

    const JobPost = sequelize.define('jobpost', {
        // Model attributes are defined here
       
        walletAddress: {
          type: DataTypes.STRING,
          allowNull: false,
          
        },
        job_title: {
          type: DataTypes.STRING,
          allowNull: false
        },
       category: {
          type: DataTypes.STRING,
          allowNull: false
        },
        company_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        company_email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          company_website: {
            type: DataTypes.STRING,
            allowNull: false
          },
          company_location: {
            type: DataTypes.STRING,
            allowNull: false
          },
          job_type: {
            type: DataTypes.STRING,
            allowNull: false
          },
          job_tag: {
            type: DataTypes.STRING,
            allowNull: false
          },
          salary: {
            type: DataTypes.STRING,
            allowNull: false
          },
          experience: {
            type: DataTypes.STRING,
            allowNull: false
          },
          job_desc: {
            type: DataTypes.STRING,
            allowNull: false
          },
          job_req: {
            type: DataTypes.STRING,
            allowNull: false
          }
          
      })

    return JobPost

}