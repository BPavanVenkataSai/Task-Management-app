const jwt = require('jsonwebtoken');

// Middleware function to check if the user is authenticated
function authenticateToken(req, res, next) {
  // Get the token from the request headers
  const token = req.header('Authorization');

  // Check if a token is provided
  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  try {
    // Verify the token using your secret key (replace 'yourSecretKey' with your actual secret key)
    const decoded = jwt.verify(token, 'yourSecretKey');

    // You can now access the decoded user information in your routes
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

module.exports = authenticateToken;
