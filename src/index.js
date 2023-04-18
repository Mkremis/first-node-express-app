import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';
// import ejs from 'ejs'; no es necesario importarlo porque node tiene integracion con ejs
const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app
  .set('views', join(__dirname, '/views'))
  .set('view engine', 'ejs')
  .use(express.static(join(__dirname, 'public')))
  .use(indexRoutes)

  .listen(port, () => console.log(`server is listening on port ${port}`));
