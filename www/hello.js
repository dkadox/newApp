/*global cordova, module*/

module.exports = {
    ptest: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hi", "ptest", [name]);
    }
};
