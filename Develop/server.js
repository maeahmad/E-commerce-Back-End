const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
//localhost:3001
// sync sequelize models to the database, then turn on the server
sequelize.sync({
  force: false//equivalent of drop databse so only use if you want to recreate db
}).then(function () {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})
