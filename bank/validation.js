// let operations= require('./operation')
let userinfo2 = require('./userinfo')

module.exports.widraValid = (amt) => {
    if (amt < userinfo2.userInfo.userBalance && amt < 25000) {
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