const express = require('express')
const app = express()
// const cors = require('cors');

// app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.post('https://www.smartly.io', (req, res) => {
    const username = req.body.candidate_name;
    res.send(username);
})

// app.listen(80, function () {
//     console.log('CORS-enabled web server listening on port 80')
// })