let fs = require('fs');
let widra_userinfo = require('./userinfo')
let widra_validation = require('./validation')


module.exports.widraAmt = (amt) => {
    if (widra_validation.widraValid(amt) === true) {
        amountGiven = widra_userinfo.userInfo.userBalance - amt
        widra_userinfo.userInfo.userBalance = amountGiven
        console.log(`user: ${ widra_userinfo.userInfo.userName },
        accountNo: ${ widra_userinfo.userInfo.userAccountNumber },
        branch: ${ widra_userinfo.userInfo.userBranch },
        Your Balance After Widra Is:`, amountGiven)

        let data = {
            user: widra_userinfo.userInfo.userName,
            accountNo: widra_userinfo.userInfo.userAccountNumber,
            branch: widra_userinfo.userInfo.userBranch,
            Your_Balance_After_Widra_Is: amountGiven
        }


        fs.appendFileSync("log.txt", "\n" + JSON.stringify(data));
    } else {
        console.log('InsufficentBalance or Entered Amount Is MoreThan Widra DailyLimit');

    }
}