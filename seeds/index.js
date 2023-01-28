require("dotenv").config();

const sequelize = require("../config/index.js");
const { Department, Role, Employee } = require("../models");

const departmentSeed = require("./department.json");
const roleSeed = require("./role.json");
const employeeSeed = require("./employee.json");

const seedDB = async () => {
    await sequelize.sync({ force: true });
    await Department.bulkCreate(departmentSeed);
    await Role.bulkCreate(roleSeed);
    await Employee.bulkCreate(employeeSeed);

    process.exit();
};

seedDB();