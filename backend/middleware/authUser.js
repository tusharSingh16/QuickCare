import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "not authorized login again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("id", token_decode.id);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(err);
    return res.json({ success: false, message: error.message });
  }
};

export default authUser;
