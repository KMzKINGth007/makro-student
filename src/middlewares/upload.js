const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // const id = uuidv4();
    cb(null, uuidv4() + "." + file.mimetype.split("/")[1]);
  },
});

const upload = multer({ storage });

module.exports = upload;
