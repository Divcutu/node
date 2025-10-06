import express from "express";
import fs from "node:fs";
import { upload } from "../middleWare/static.js";
import path from "node:path";
import { jwtVerifyMiddlwire } from "../middleWare/jwtVerify.js";
import { fileURLToPath } from 'url';
const router = express.Router();

router.post("/upload/img", jwtVerifyMiddlwire, upload.single('avatar'), async (req, res) => {
    if (req.file) {
        try {
            const __dirname = path.dirname(fileURLToPath(import.meta.url));
            console.log(fileURLToPath(import.meta.url), path.dirname(fileURLToPath(import.meta.url)));
            fs.renameSync(path.join(__dirname, '../static/' + req.file.filename), path.join(__dirname, `../static/${req.file.filename}.${req.file.originalname.split('.')[1]}`))
            res.status(200).send({ msg: "上传成功", imgUrl: req.file.filename, code: 200 })
        } catch (error) {
            console.log(error)
            res.status(500).send({ msg: "上传失败", code: 500 })
        }
    }

    res.status(401).send({ msg: "请上传图片", code: 401 })
})

export default router;