import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      status: 'error',
      code: 401,
      message: 'TOKEN_DOES_NOT_EXIST',
    });
  }

  const token = authHeader.split(' ')[1];

  console.log(token);

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
    req.userEmail = decoded.email;
    req.userName = decoded.name;

    return next();
  } catch (error) {
    return res.status(401).json({
      status: 'error',
      code: 401,
      message: 'INVALID_TOKEN',
    });
  }
};
