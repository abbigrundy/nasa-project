const { Sequelize, DataTypes } = require("sequelize");
const { username, password } = require("./.database-credentials");

const connectDatabase = new Sequelize("mars-rover", username, password, {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

const tryConnection = async () => {
  try {
    await connectDatabase.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

tryConnection();

const Users = connectDatabase.define("users", {
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  id: {
    type: Sequelize.INTEGER,
  },
});

module.exports = { Users };
