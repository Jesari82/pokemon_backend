import leaderboard from "../models/leaderboardModel.js";


export const getLeaderboard = async (req, res) => {
    try {
        const leaderboardList = await leaderboard.findAll();
        res.status(200).json(leaderboardList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getLeaderboardByUsername = async (req, res) => {
    const { params:{username}} = req;
    try {
        const leaderboardList = await leaderboard.findAll({ where: { username } });
        res.status(200).json(leaderboardList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postLeaderboard = async (req, res) => {
    const { username, score } = req.body;
    try {
        const newLeaderboard = await leaderboard.create({ username, score });
        res.status(201).json(newLeaderboard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const putLeaderboard = async (req, res) => {
    const { params:{username}} = req;
    const { score } = req.body;
    try {
        const updatedLeaderboard = await leaderboard.update({ score }, { where: { username } });
        res.status(200).json(updatedLeaderboard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteLeaderboard = async (req, res) => {
    const {params: {username} } = req;
    try {
        await leaderboard.destroy({ where: { username } });
        res.status(200).json({ message: "Leaderboard deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}
