import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import entry from '../models/mock-db/users.json';

dotenv.config();

class AuthController {
  static async signup(req, res) {
    const entries = members;
    const { username, email } = req.body;
    const newMember = {
      username,
      email,
    };
    entries.push(newMember);
    res.json({
      newMember,
    });

    const token = await jwt.sign(
      newMember,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY },
    );

    res.json({
      newMember,
      token,
    });
  }

  static async signin(req, res) {
    const { username, email, password } = members[0];

    const loginemail = req.body.email, loginpassword = req.body.password;

    const members = {
      username,
      email,
    };

    if (loginemail === email && password === loginpassword) {
      const token = await jwt.sign(
        user,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRY },
      );
      res.json({
        member,
        token,
      });
    } else {
      res.json({
        error: 'password or email is incorrect',
      });
    }
  }
}


export default AuthController;