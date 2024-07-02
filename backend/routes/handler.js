const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "John Doe",
        "msg": "Hello, world!",
        "username": "johndoe"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('Tweet was added.');
});

module.exports = router;
