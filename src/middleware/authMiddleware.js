// middleware/authMiddleware.js
import jwt from "jsonwebtoken";


const authMiddleware = (req, res, next) => {
  // Get the token from Authorization header
  const token = req.headers['authorization']?.split(' ')[1]; // Format: 'Bearer <token>'

  if (!token) return res.status(403).json({ message: 'No token provided, access denied.' });
  

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your actual secret key
    
    // Attach the decoded user information to the request object
    req.user = decoded;
    next(); // Pass the request to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default authMiddleware;