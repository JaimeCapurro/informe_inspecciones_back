const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");


const storage = multer.diskStorage({
    destination: path.join(__dirname, process.env.PATH_INFORMES),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLowerCase());
    },
});

const subirInformes = multer({
    storage: storage,
    limits: { fileSize: 30000000 }, 
}).single("pdf");

module.exports = {
    subirInformes,
};