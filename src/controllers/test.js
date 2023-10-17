/**
 * get test
 * @param {*} req 
 * @param {*} res 
 */
const getTest = async (req, res) => {
    try {
        res.status(200).json({
            message: "Hola Mundo!",
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getTest
}