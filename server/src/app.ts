import express, { Router } from 'express';
import cors from 'cors';
import ApplicationRoutes from './routes/ApplicationRoutes';

export default class SetupApplication {
  private app: express.Application;

  constructor() {
    this.app = express(); 
    this.setupExpress();
    this.setupCors();
    this.routes();
  }

  private routes() {
    const appRoutes = new ApplicationRoutes();
    this.app.use(appRoutes.define(Router())) 
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupCors() {
    this.app.use(cors());
  }

  public start(): void {
    this.app.listen(3333, () => console.log("Server is running on PORT: 3333"));
  }
}
