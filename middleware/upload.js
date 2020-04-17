const multer = require('multer');
const uuid = require('uuid');

const upload = async (req, res, next) => {
    const configStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads');
        },
        filename: (req, file, cb) => {
            const fileName = uuid(file.originalname, uuid.v5.DNS);
            cb(null, fileName);
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
    multer({storage: configStorage, fileFilter:fileFilter});
    res.fileName = fileName;
    next();
}

module.exports = upload