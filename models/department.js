const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");

class Department extends Model {}

Department.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: "department",
  }
);

module.exports = Department;