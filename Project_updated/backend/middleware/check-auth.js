const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5pdCIsInVzZXJJZCI6IjVmYmZkM2YwZGUwNjRiMzRhNDE4ZTJkYiIsImlhdCI6MTYxMTA3MjA3NSwiZXhwIjoxNjExMDc1Njc1fQ.dLyXbhY_q6ptcBZP226Y3IP8Ds1d0eNJN096C_3MhEE");
    req.userData = {email:decodedToken.email, userId:decodedToken.userId}
    next();
  } catch (error) {
    res.status(401).json({message:"You are not authenticated"});
  }
};
