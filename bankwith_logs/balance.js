let fs = require('fs');
let bala_userinfo = require('./userinfo')

module.exports.balaAmt = () => {
    var amount = bala_userinfo.userInfo.userBalance
    console.log(
        `user: ${ bala_userinfo.userInfo.userName },
            accountNo: ${ bala_userinfo.userInfo.userAccountNumber },
            branch: ${ bala_userinfo.userInfo.userBranch }
        has a Balance of:${ bala_userinfo.userInfo.userBalance }`
    );
    let data = {
        user: bala_userinfo.userInfo.userName,
        accountNo: bala_userinfo.userInfo.userAccountNumber,
        branch: bala_userinfo.userInfo.userBranch
        has_a_Balance_of: amount
    }


    fs.appendFileSync("log.txt", "\n" + JSON.stringify(data));
}