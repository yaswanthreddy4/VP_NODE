let validation_userinfo = require('./userinfo')

module.exports.widraValid = (amt) => {
    if (amt < validation_userinfo.userInfo.userBalance && amt < 25000) {
        return true;
    } else {
        return false;
    }

}
module.exports.depositeValid = (amt) => {
    if (amt < 50000) {
        return true;
    } else {
        return false;
    }

}