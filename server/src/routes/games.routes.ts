import { Router } from "express";
import GamesController from "../controllers/GamesController";

const gamesRoutes = Router();
const gamesController = new GamesController();

gamesRoutes.get('/games', gamesController.listGames);
gamesRoutes.get('/games/:id/ads', gamesController.listAdsByGames);
gamesRoutes.get('/ads/:id/discord', gamesController.getDiscordByAd);
gamesRoutes.post('/games/:id/ads', gamesController.createAd);

export default gamesRoutes;