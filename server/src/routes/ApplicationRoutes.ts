import { Router } from "express";
import gamesRoutes from "./games.routes";

export default class ApplicationRoutes {
  public define(router: Router): Router {
    router.use('/', gamesRoutes);

    return router;
  }
}