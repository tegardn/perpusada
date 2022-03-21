'use strict'

/**
 * Class Declaration
 * Module Export Class
 */

class Controller {
    static Homepage(req, res) {
        res.send('Hello ini Controller Prima');
    }
}

module.exports = {
    Controller
};