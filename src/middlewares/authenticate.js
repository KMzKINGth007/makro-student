const createError = require("../utils/createError")
const jwt = require("jsonwebtoken")

const userService = require("../services/user-service")

const authenticate = async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return createError(401, "Unauthorized");
      }
  
      const arrayToken = authorization.split(" ");
      const token = arrayToken[1];
  
      if (arrayToken[0] !== "Bearer" || !token) {
        return createError(401, "Unauthorized");
      }
  
      const payload = jwt.verify(token, process.env.SECRET_KEY);
  
      if (
        typeof payload !== "object" ||
        !payload?.id ||
        typeof payload.id !== "string"
      ) {
        return createError(400, "Payload is not in correct format");
      }
  
      const user = await userService.getUserById(payload.id);
  
      if (!user) {
        return createError(400, "User not found");
      }
  
      req.user = user;
  
      next();
    } catch (err) {
      next(err);
    }
  };