var lograp = require("lograp"),
    winston = require("winston")
var moonshine = require("../../")
var settings = moonshine.settings

module.exports.pre = function(cb){
    try {
        lograp.rootPath = settings.LOGGING_ROOT_PATH;
        winston.addColors(settings.LOGGING_WINSTON_COLOR)
        if (settings.LOGGING_SETUP_TRANSPORTS) {
            settings.LOGGING_SETUP_TRANSPORTS(winston)
        } else {
            winston.add(winston.transports.Console,{
                level:settings.LOGGING_LOG_LEVEL,
                handleExceptions: true,
                colorize: true
            })
        }
        winston.remove(winston.transports.Console)
        moonshine.logging ={
            native: winston
        }
        moonshine.logFactory = lograp
        lograp().debug("logging initialized")
        cb()
    } catch (err) {
        cb(err)
    }
}
