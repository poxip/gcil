/**
 * Created by poxip on 31.12.14.
 * The main server module
 */

var express = require('express');

const DEFAULT_PORT = process.env.PORT || 80;

server = {};
server.debug = false;

server.app = express();
server.app.get('/', function (req, res) {
    res.send('Server test! OK!');
});

/**
 * Starts the server
 * @param {Number} port The server's port
 */
server.start = function (port, debug) {
    if (typeof port !== 'number') {
        port = DEFAULT_PORT;
    }

    if (typeof debug === 'boolean') {
        server.debug = true;
    }

    server.app.listen(port, function () {
        var host = this.address().address;
        var port = this.address().port;

        console.log('Server is listening at http://%s:%s', host, port);
    });
};

module.exports = server;