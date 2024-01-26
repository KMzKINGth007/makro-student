const cloudinary = require("../config/cloudinary");

const cloudUpload = async (path) => {
  const res = await cloudinary.uploader.upload(path);

  return res.secure_url;
};

module.exports = cloudUpload;
