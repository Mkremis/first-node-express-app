import { Router } from 'express';
const router = Router();
router
  .get('/', (req, res) => res.render('index', { title: 'Node.js Website' }))
  .get('/about', (req, res) => res.render('about', { title: 'About Us' }))
  .get('/contact', (req, res) =>
    res.render('contact', { title: 'Contact Us' })
  );

export default router;
