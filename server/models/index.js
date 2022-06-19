const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.recruiters = require('./Recruiter.js')(sequelize, DataTypes)
db.jobPosts = require('./JobPost.js')(sequelize, DataTypes)
db.candidiates = require('./Candidiate.js')(sequelize, DataTypes)
db.applications = require('./Application.js')(sequelize, DataTypes)
// db.sequelize.sync({ force: false })
// .then(() => {
//     console.log('yes re-sync done!')
// })

db.sequelize.sync({force: true})
.then(()=>console.log('yes resync done!'))
// 1 to Many Relation

db.recruiters.hasMany(db.jobPosts, {
    foreignKey: 'recruiter_id',
    as: 'posts'
})

db.jobPosts.belongsTo(db.recruiters, {
    foreignKey: 'recruiter_id',
    as: 'recruiters'
})

db.candidiates.hasMany(db.applications, {
    foreignKey: 'candidiate_id',
    as: 'applications'
})

db.applications.belongsTo(db.candidiates, {
    foreignKey: 'candidiate_id',
    as: 'candidiates'
})
db.jobPosts.hasMany(db.applications, {
    foreignKey: 'jobpost_id',
    as: 'applications'
})

db.applications.belongsTo(db.jobPosts, {
    foreignKey: 'jobpost_id',
    as: 'jobposts' 
})

db.recruiters.hasMany(db.applications, {
    foreignKey: 'recruiter_id',
    as: 'applications'
})

db.jobPosts.belongsToMany(db.applications, {through: "post_app"})
db.applications.belongsToMany(db.jobPosts, {through: "post_app"})

module.exports = db