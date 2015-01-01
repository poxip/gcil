/**
 * Created by poxip on 01.01.15.
 * Utiles module.
 */

var ut = {};

ut.SECOND = 1000 // ms
ut.MINUTE = 60*ut.SECOND;
ut.HOUR   = 60*ut.MINUTE;
ut.DAY    = 24*ut.DAY;

/**
 * Converts time struct to milliseconds
 * @param {Object} time Time struct to be converted to milliseconds
 * @param {Number} [time.milliseconds=0] A number of milliseconds
 * @param {Number} [time.seconds=0]      A number of seconds
 * @param {Number} [time.minutes=0]      A number of minutes
 * @param {Number} [time.hours=0]        A number of hours
 * @param {Number} [time.days=0]         A number of days
 * @returns {Number} Time in milliseconds
 */
ut.timeToMilliseconds = function (time) {
    var milliseconds =  time.milliseconds || 0;
        milliseconds += time.seconds*ut.SECOND || 0;
        milliseconds += time.minutes*ut.MINUTE || 0;
        milliseconds += time.days*ut.DAY || 0;

    return milliseconds;
};

module.exports = ut;