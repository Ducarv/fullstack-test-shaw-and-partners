import multer from "multer";
//import path from "path";

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, '../../public/uploads/')
//     },
//     filename: (req, file, callcack) => {
//         callcack(
//             null,
//             file.fieldname + '-' + Date.now() + path.extname(file.originalname)
//         )
//     }
// })

export const multerConfig = multer();
//export const upload = multer({storage})