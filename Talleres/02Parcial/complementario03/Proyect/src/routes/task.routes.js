const { Router } = require('express');
const { GetTask } = require('../controllers').Task;


const router = Router();

router.get('/', GetTask );

module.exports = router;