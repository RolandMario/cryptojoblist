module.exports = {
    HOST: 'localhost',
   // USER: 'crypto_jobs' D@hS.PnE4KQ2Xb5,
   USER: 'root',
    PASSWORD: 'root',
    DB: 'cryptojobs',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}