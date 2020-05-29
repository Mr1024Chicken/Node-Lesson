const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'resource get method'
    });
});

router.post('/', (req,res,next) => {
    res.status(200).json({
        message: 'resource post method'
    });
});

module.exports = router;