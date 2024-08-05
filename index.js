import express from 'express';
import './db/index.js';
import cors from 'cors';
const app = express();

const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: '*' }));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});