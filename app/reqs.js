const express = require('express');
const router = express.Router();
const http = require('request');

router.get('/', async (req, res) => {
    try {
        return res.send("ALL WORKED!")
    } catch (e) {
        return res.status(401).send(e)
    }
})
router.post('/', async (req, res) => {
    try {
        const token = "1912778515:AAEB8YA-DWf5FS6SIU9Gi5QHMpuBVsnoe3s";
        const id2 = "547616061";

        const newZapisDev = [
            `<b>Name: <i> ${req.body.name}</i></b>`,
            `<b>Phone: <i>${req.body.phone}</i></b>`,
            `<b>Select: <i>${req.body.select}</i></b>`,
        ];
        let msg2 = "";
        newZapisDev.forEach((i) => {
            msg2 += i+"\n"
        })
        http.post(encodeURI(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id2}&parse_mode=html&text=${msg2}`))

    } catch (e) {
        console.error(e)
        return res.status(400).send(e)
    } console.log(req.body)
})




module.exports = router;