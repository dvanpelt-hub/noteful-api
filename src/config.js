//Let's also create a JavaScript file to keep track of these values and set sensible defaults if necessary. Create a file called src/config.js that has the following content with defaults for the PORT value.
module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
}