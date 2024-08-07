import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";

const leaderboard = sequelize.define("leaderboard", {
    username: {type: DataTypes.STRING , allowNull: false},
    score : {type: DataTypes.INTEGER , allowNull: false},
});
sequelize.sync();
export default leaderboard;