const express = require("express");
const router = express.Router();

const { getTest } = require("./../controllers/test.js");

/**
 * path to test
 */
router.get("/", getTest);

/**
 * path to new endpoint
 */
router.get("/new-endpoint", (req, res) => {
    res.status(200).json({
        message: "new endpoint",
    });
});

module.exports = router;