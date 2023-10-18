const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

/* CONFIGURATION */
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

/**
 * API REST
 */
app.use("/", require("./src/routes"));  

module.exports = app;

function main() {
    try {
        app.listen(PORT);
        console.log(`Server on port ${PORT}`);
    } catch (error) {
        console.error('', error);
    }
}

if (require.main === module) {
    main();
}
