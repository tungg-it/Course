const express = require('express');
const router = express.Router();

//inport file NewsController.js
const siteController = require('../app/controllers/SitesController');

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
