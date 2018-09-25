let operations = require('./userinfo')
let validation = require('./validation')
module.exports.balaAmt = () => {
    console.log(
        `user: ${ operations.userInfo.userName },
            accountNo: ${ operations.userInfo.userAccountNumber },
            branch: ${ operations.userInfo.userBranch }
        has a Balance of:${ operations.userInfo.userBalance }`
    );
}
module.exports.depositeAmt = (amt) => {
    if (validation.depositeValid(amt) === true) {
        amountGiven = operations.userInfo.userBalance + amt
        operations.userInfo.userBalance = amountGiven
        console.log(`user: ${ operations.userInfo.userName },
        accountNo: ${ operations.userInfo.userAccountNumber },
        branch: ${ operations.userInfo.userBranch },
        Your Balance After deposite Is:`, amountGiven)
    } else {
        console.log(`You Have Entered More Than Daily Limit. Please Try Again`);
    }
}
module.exports.widraAmt = (amt) => {
    if (validation.widraValid(amt) === true) {
        amountGiven = operations.userInfo.userBalance - amt
        operations.userInfo.userBalance = amountGiven
        console.log(`user: ${ operations.userInfo.userName },
        accountNo: ${ operations.userInfo.userAccountNumber },
        branch: ${ operations.userInfo.userBranch },
        Your Balance After Widra Is:`, amountGiven)
    } else {
        console.log('InsufficentBalance or Entered Amount Is MoreThan Widra DailyLimit');

    }
}