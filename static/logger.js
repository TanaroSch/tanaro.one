// logger.js
(function(window) {
    var LogLevel = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3
    };

    function Logger(level) {
        this.level = level || LogLevel.INFO;
    }

    Logger.prototype.debug = function(message) {
        if (this.level <= LogLevel.DEBUG) {
            console.log('[DEBUG]', message);
        }
    };

    Logger.prototype.info = function(message) {
        if (this.level <= LogLevel.INFO) {
            console.log('[INFO]', message);
        }
    };

    Logger.prototype.warn = function(message) {
        if (this.level <= LogLevel.WARN) {
            console.warn('[WARN]', message);
        }
    };

    Logger.prototype.error = function(message) {
        if (this.level <= LogLevel.ERROR) {
            console.error('[ERROR]', message);
        }
    };

    Logger.prototype.setLevel = function(level) {
        this.level = level;
    };

    window.Logger = Logger;
    window.LogLevel = LogLevel;
})(window);