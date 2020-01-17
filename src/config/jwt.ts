export default {
  secret: process.env.JWT_SECRET,
  expiresIn: String(process.env.JWT_EXPIRESIN),
};
