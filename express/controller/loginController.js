import bcrypt from "bcrypt"
import models from "./../models/init-models.js"
import jwt from 'jsonwebtoken';


const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await models.user_admin.findOne({ where: { username: username } });
      if (user == null) {
        throw new Error('Invalid username');
      }
      const password1 = await bcrypt.compare(password, user.password);
      if (!password1) {
        throw new Error('Invalid password');
      }
      const token = jwt.sign({ username: username , role : user.userrole}, process.env.SECRET_KEY, { expiresIn: '1H' });
      res.json({ message: `Welcome ${username}`, token: token});
    } catch (e) {
      return res.status(401).json({ message: e.message });
    }
  };


  const checkTokenUser = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if(!token){
        throw new Error('silahkan Login terlebih dahulu')
      }
      jwt.verify(token, process.env.SECRET_KEY);
      next();
    } catch (e) {
      return res.status(401).json({ message: e.message });
    }
  };

  const checkTokenAdmin = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error('Silahkan login terlebih dahulu');
      }
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      
      if (decodedToken.role !== 'admin') {
          throw new Error('Hanya admin yang bisa mengakses');
      }
  
      next();
    } catch (e) {
      return res.status(401).json({ message: e.message });
    }
  };
  
  export default{
    login,
    checkTokenUser,
    checkTokenAdmin
  }

  