/**
 * Created by poxip on 31.12.14.
 * The main server module
 */

var express = require('express');
ut = require('./ut');
    debug   = require('./debug');

const DEFAULT_PORT = process.env.PORT || 80;
const DEFAULT_UPDATE_RATE = ut.timeToMilliseconds({minutes: 5});

/**
 * A callback function, that makes updates to database
 */
function updateDatabase() {
    debug.debug('Database update');
    // @TODO
}

server = {};
server.app = express();
server.app.get('/', function (req, res) {
    res.send('Server test! OK!');
});

/**
 * Starts the server
 * @param {Number}  [port=process.env.PORT or 80] The server's port
 * @param {Number}  [updateRate=300] Updates interval in milliseconds,
 *                                   default 5 minutes
 * @param {Boolean} [isDebug=false] The debug state
 */
server.start = function (isDebug, updateRate, port) {
    if (typeof port !== 'number') {
        port = DEFAULT_PORT;
    }

    if (typeof updateRate === 'undefined') {
        updateRate = DEFAULT_UPDATE_RATE;
    }

    if (typeof isDebug === 'boolean') {
        debug.on = isDebug;
    }

    server.app.listen(port, function () {
        var host = this.address().address;
        var port = this.address().port;
        debug.debug('Server is listening at http://'+host+':'+port);

        updateDatabase();
    });

    // Set up data updating (cron)
    this.updateIntervalId = setInterval(updateDatabase, updateRate)
};

module.exports = server;