import jwt from "jsonwebtoken";

const authDoctor = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;
    if (!dtoken) {
      return res.json({
        success: false,
        message: "not authorized login again",
      });
    }
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
    // console.log("id", token_decode.id);
    req.body.docId = token_decode.id;
    next();
  } catch (error) {
    console.log(err);
    return res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
