import express, { Request, Response, Router } from 'express';

interface LoginRequestBody {
  username: string;
  password: string;
}

const router: Router = express.Router();

router.post(
  '/login',
  (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
    const { username, password } = req.body;

    console.log('Received username:', username);
    console.log('Received password:', password);

    // Hardcoded credentials for testing
    if (username === '7cities' && password === '7cities') {
      const token = 'example-token'; // Replace with a real JWT if needed
      return res.status(200).json({
        success: true,
        data: { token },
        message: 'Login successful',
      });
    }

    return res.status(401).json({
      success: false,
      data: null,
      message: 'Invalid username or password',
    });
  }
);

export default router;
