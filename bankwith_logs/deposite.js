let fs = require('fs');
let deposite_userinfo = require('./userinfo')
let deposite_validation = require('./validation')

module.exports.depositeAmt = (amt) => {
    if (deposite_validation.depositeValid(amt) === true) {
        amountGiven = deposite_userinfo.userInfo.userBalance + amt
        deposite_userinfo.userInfo.userBalance = amountGiven

        console.log(`user: ${ deposite_userinfo.userInfo.userName },
        accountNo: ${ deposite_userinfo.userInfo.userAccountNumber },
        branch: ${ deposite_userinfo.userInfo.userBranch },
        Your Balance After deposite Is:`, amountGiven)

        let data = {
            user: deposite_userinfo.userInfo.userName,
            accountNo: deposite_userinfo.userInfo.userAccountNumber,
            branch: deposite_userinfo.userInfo.userBranch,
            Your_Balance_After_deposite_Is: amountGiven
        }


        fs.appendFileSync("log.txt", "\n" + JSON.stringify(data));


    } else {
        console.log(`You Have Entered More Than Daily Limit. Please Try Again`);
    }

}