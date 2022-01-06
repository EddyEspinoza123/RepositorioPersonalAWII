const { Router } = require('express');
const { GetUsers } = require('../controllers').Users;


const router = Router();

router.get('/', GetUsers );

module.exports = router;