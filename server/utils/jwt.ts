import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('SECRET_KEY is not defined in environment variables');
}

const EXPIRATION_TIME = '15m'; // Token expiration time

interface TokenPayload {
  id: number;
  email: string;
  role: string;
}

// Generate a JWT
export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRATION_TIME });
};

// Verify a JWT
export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, SECRET_KEY) as TokenPayload;
  } catch (error) {
    console.error('JWT Verification Error:', error);
    return null; // Return null instead of throwing to allow custom error handling
  }
};