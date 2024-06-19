import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import ServiceRouter from './routes/service.route';

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.get('/', (req: Request, res: Response) => {
      res.send(`Backend is running on port ${this.port}`);
    });
  }

  private initializeRoutes() {
    this.app.use('/', ServiceRouter);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server is Running on http://localhost:${this.port}`);
    });
  }
}

const server = new Server();
server.start();