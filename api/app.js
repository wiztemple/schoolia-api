import express from 'express';
import logger from 'volleyball';
import dotenv from 'dotenv';
import cors from 'cors';
import SchoolRoutes from './server/routes/SchoolRoutes';

const app = express();

dotenv.config();

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const port = process.env.PORT || 7000;

app.use('/api/v1/schools', SchoolRoutes);

// when a random route is inputed
app.get('*', (request, response) =>
	response.status(200).json({
		message: 'Welcome to Schoolia API.'
	})
);
app.listen(port, () => {
	console.log(`Server is running on PORT ${port}`);
});

export default app;
