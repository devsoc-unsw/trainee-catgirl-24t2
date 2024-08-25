import express from 'express';
import { authentication } from './routes/authentication';
import cors from 'cors';
import { errorHandler } from './middleware/error-middleware';
import 'express-async-errors';

// Server stuff
const app = express();
const port = 3000;

// Parse incoming JSON data.
app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

app.use('/authentication', authentication);

app.use(errorHandler);
