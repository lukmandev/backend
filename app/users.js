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
        const token = "1793401295:AAHX-iAa69_j1RG9caGIpSwkdb8H5JKtj6M";
        const id = "547616061";

        const newZapis = [
            `<b>Name: <i> ${req.body.name}</i></b>`,
            `<b>Phone: <i>${req.body.phone}</i></b>`,
            `<b>Select: <i>${req.body.select}</i></b>`,
        ];
        let msg = "";
        newZapis.forEach((i) => {
            msg += i+"\n"
        })

        http.post(encodeURI(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&parse_mode=html&text=${msg}`))

    } catch (e) {
        console.error(e)
        return res.status(400).send(e)
    } console.log(req.body)

})


module.exports = router;