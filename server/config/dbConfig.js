module.exports = {
    //HOST: 'localhost',
    HOST: '176.58.122.154',
   USER: 'crypto_jobs' ,
   //USER: 'root',
    //PASSWORD: 'root',
    PASSWORD: 'D@hS.PnE4KQ2Xb5',
    //DB: 'cryptojobs',
    DB: 'Test',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}