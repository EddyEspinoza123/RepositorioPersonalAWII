const { Router } = require('express');
const { GetAdvert } = require('../controllers').Advert;


const router = Router();

router.get('/', GetAdvert );

module.exports = router;