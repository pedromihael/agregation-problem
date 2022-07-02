import { Router, Request, Response } from 'express';
import { GetBankDataController } from '../GetBankDataController';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const response = await GetBankDataController();
  res.status(response.status).send(response);
});

router.get('/health-check', (req, res) => {
  res.status(200).send("Doctor said I'm good.");
});

export default router;
