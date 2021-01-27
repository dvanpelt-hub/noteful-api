require('dotenv').config();

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "port": process.env.MIGRATION_DATABASE_PORT,
  "connectionString":
    process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL,
  "ssl": !!process.env.SSL,
};