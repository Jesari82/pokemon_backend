import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";

const roster = sequelize.define("roster", {
    name : {type: DataTypes.STRING , allowNull: false},
    image: {type: DataTypes.STRING },
    type : {type: DataTypes.STRING , allowNull: false},
    height : {type: DataTypes.INTEGER , allowNull: false},
    weight : {type: DataTypes.INTEGER , allowNull: false},
    ability : {type: DataTypes.STRING , allowNull: false},
    experience : {type: DataTypes.INTEGER , allowNull: false},
    hp : {type: DataTypes.INTEGER , allowNull: false},
    attack : {type: DataTypes.INTEGER , allowNull: false},
    defense : {type: DataTypes.INTEGER , allowNull: false},
    specialAttack : {type: DataTypes.INTEGER , allowNull: false},
    specialDefense : {type: DataTypes.INTEGER , allowNull: false},
    speed : {type: DataTypes.INTEGER , allowNull: false},
});
sequelize.sync();
export default roster;