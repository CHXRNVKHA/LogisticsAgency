const multer = require('multer');
const uuid = require('uuid');

const configStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, uuid(file.originalname, uuid.v5.DNS));
    },
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/png" || 
    file.mimetype === "image/jpg" || 
    file.mimetype === "image/jpeg") {
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

module.exports = multer({storage: configStorage, fileFilter:fileFilter})