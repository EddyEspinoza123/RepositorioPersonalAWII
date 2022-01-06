const { Router } = require('express');
const { GetPost, GetPostByType } = require('../controllers').Post;


const router = Router();

router.get('/', GetPost );
router.get('/:type_post', GetPostByType  );

module.exports = router;