const express = require("express");
const router = express.Router();

const {getTest} = require("./../controllers/test.js");

/**
 * path to test
 */
router.get("/", getTest);

module.exports = router;