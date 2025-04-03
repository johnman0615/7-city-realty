declare namespace Express {
  interface Request {
    user?: {
      id: number;
      username: string;
      user_type: string;
    };
  }
}
