import { Router } from 'express';
import ServiceController from '../controllers/service.controller';

class ServiceRouter {
  private router: Router;
  private serviceController: ServiceController;

  constructor() {
    this.router = Router();
    this.serviceController = new ServiceController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/ping', this.serviceController.ping);
    this.router.get('/read', this.serviceController.getSubmission);
    this.router.post('/submit', this.serviceController.createSubmission);
    this.router.delete('/delete', this.serviceController.deleteSubmission);
    this.router.put('/edit', this.serviceController.updateSubmission);
    this.router.post('/read-by-email', this.serviceController.getReadByEmail);
  }

  public getRouter() {
    return this.router;
  }
}

export default new ServiceRouter().getRouter();