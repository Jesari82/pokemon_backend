import { Router } from "express";
import { getLeaderboard, getLeaderboardByUsername, postLeaderboard, putLeaderboard, deleteLeaderboard } from '../controllers/leaderboardController.js';

const leaderboardRoute = Router();



leaderboardRoute.get('/', getLeaderboard);
leaderboardRoute.get('/:username', getLeaderboardByUsername);
leaderboardRoute.post('/', postLeaderboard);
leaderboardRoute.put('/:username', putLeaderboard);
leaderboardRoute.delete('/:username', deleteLeaderboard);


export default leaderboardRoute;