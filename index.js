import express from 'express';
import './db/index.js';
import cors from 'cors';
import leaderboardRoute from './routers/leaderboardRoute.js';
import rosterRoute from './routers/rosterRoute.js';
import leaderboard from './models/leaderboardModel.js';
import roster from './models/rosterModel.js';
const app = express();

const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/leaderboard', leaderboardRoute);
app.use('/roster', rosterRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});