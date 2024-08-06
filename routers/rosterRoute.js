import { Router } from "express";
import { getRoster,getRosterByName, postRoster, putRoster, deleteRoster } from '../controllers/rosterController.js';
const rosterRoute = Router();


rosterRoute.get('/', getRoster);
rosterRoute.get('/:name', getRosterByName);
rosterRoute.post('/', postRoster);
rosterRoute.put('/:name', putRoster);
rosterRoute.delete('/:name', deleteRoster);


export default rosterRoute;