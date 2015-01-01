/**
 * Created by poxip on 31.12.14.
 * Server start script.
 */

var server = require('./server');
ut = require('./ut');

server.start(true, ut.timeToMilliseconds({minutes: 2}), 3000);