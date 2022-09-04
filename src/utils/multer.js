const multer = require('multer');
const path = require(path);

const updateImg = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve('carpeta')); //? aqui debo poner mi ruta donde quiero guardar mis archivos.
        },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + req.filename);
    }
    })

    const upload = multer({storage});
    return upload;
}

module.exports = {
    updateImg
}