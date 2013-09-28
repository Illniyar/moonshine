module.exports.config = function(settings) {
    settings.LOGGING_ROOT_PATH = settings.ROOT_PATH
    settings.LOGGING_WINSTON_COLOR ={
        silly: 'grey',
        verbose: 'cyan',
        debug: 'magenta',
        info: 'green',
        warn: 'yellow',
        error: 'red'
    }
    settings.LOGGING_LOG_LEVEL = "debug"

    settings.middleware.push(require.resolve("./middleware"))
}