module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "ebershr1",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };