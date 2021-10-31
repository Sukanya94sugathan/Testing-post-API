const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true
}))
app.post('https://www.smartly.io', (req, res) => {
    const username = req.body.candidate_name;
    res.send(username);
})