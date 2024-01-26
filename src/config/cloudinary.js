const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'diwhqtnnu', 
    api_key: '878392834521837', 
    api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary