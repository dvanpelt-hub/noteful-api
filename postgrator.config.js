require('dotenv').config();

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "port": process.env.MIGRATION_DB_PORT,
  "connectionString":
    process.env.NODE_ENV === 'test' ? process.env.TEST_DB_URL : process.env.DB_URL,
}