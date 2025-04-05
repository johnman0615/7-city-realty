import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middleware/errorHandlerMiddleware';

// Load environment variables
dotenv.config();

// Validate required environment variables
const { PORT, CLIENT_URL } = process.env;

if (!PORT || !CLIENT_URL) {
  throw new Error('Missing required environment variables: PORT, CLIENT_URL');
}

const app = express();

// Middleware
app.use(cors({ origin: CLIENT_URL, credentials: true })); // Supports credentials (cookies, authorization headers)
app.use(express.json()); // Replaces bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()
app.use(morgan('dev'));
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware (must be added after all routes)
app.use(errorHandler);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('🔴 SIGTERM received, shutting down server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🔴 SIGINT received, shutting down server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});
