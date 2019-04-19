import { Router } from 'express';

const router = Router();

router.get('/', function (req, res) {
  res.send('hello');
});

export default router;
