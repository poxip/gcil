/**
 * Created by poxip on 31.12.14.
 * The main server module
 */

var express = require('express');
    debug   = require('./debug');

const DEFAULT_PORT = process.env.PORT || 80;

server = {};
server.app = express();
server.app.get('/', function (req, res) {
    res.send('Server test! OK!');
});

/**
 * Starts the server
 * @param {Number}  [port=process.env.PORT or 80] The server's port
 * @param {Boolean} [isDebug=false] The debug state
 */
server.start = function (isDebug, port) {
    if (typeof port !== 'number') {
        port = DEFAULT_PORT;
    }

    if (typeof isDebug === 'boolean') {
        debug.on = isDebug;
    }

    server.app.listen(port, function () {
        var host = this.address().address;
        var port = this.address().port;

        debug.debug('Server is listening at http://'+host+':'+port);
    });
};

module.exports = server;