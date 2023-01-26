require("dotenv").config();
const inquirer = require("inquirer");
const sequelize = require("./db/connection.js");
const db = require("./db");
require("console.table");

inquirer.prompt([{
    type: "list",
    choices: [
        "View Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
    ],
    message: "What would you like to do?",
    name: "choice",
    },
])
.then((data) => {
    let userChoice = data.choice;
    switch (userChoice) {
        case "View All Employees":
            viewEmployees();
    }
});

function viewEmployees() {
    db.findAllEmployees().then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    });
}