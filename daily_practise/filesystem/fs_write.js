const fs = require('fs')
console.log("This is 1st line");

// Read Sync
// let data = fs.readFileSync('first.js')
// console.log(data);
// console.log(data.toString());

// Read Async
// let data1 = fs.readFile('first.js', function(error, data) {
//     if (error) {
//         console.log("cant read a file", error);
//     }
//     console.log(data);
//     console.log(data.toString());
// })

// Write sync
// let user = {
//     "name": "yaswanthreddy",
//     "age": 25
// }
// fs.writeFileSync('user_file', JSON.stringify(user))
// console.log("write sucess");


//Write Async
// let user = {
//     "name": "lambu",
//     "age": 25
// }
// fs.writeFileSync('user_file', JSON.stringify(user), function(error, data) {
//     if (error) {
//         console.log("writefails", error);
//     }
//     console.log("write scusses");
// })
// console.log("write sucess");


//Append sync
// let user = {
//     "name": "yaswanthreddy",
//     "age": 25
// }
// fs.appendFileSync('user_file', "\n" + JSON.stringify(user))
// console.log("write sucess");

//Append Async
// let user = {
//     "name": "yaswanthreddy",
//     "age": 25
// }
// fs.appendFile('user_file', "\n" + JSON.stringify(user), function(error, data) {
//     if (error) {
//         console.log("error ocured");
//     }
//     console.log('sucess');
// })

//Rename sync
// fs.renameSync('fuck', 'file.txt')
// console.log("write sucess");

// Rename Async
// fs.rename('allinone_fs.txxt', 'allinone_fs.txt', function(error, data) {
//     if (error) {
//         console.log("error vachindi ra jafaa", error);
//     }
//     console.log("sucess");
// })

// Delete Sync
// fs.unlinkSync("user_file")
// console.log("sucess");

// Delete ASync
// fs.unlink("user_file", function(error, data) {
//     if (error) {
//         console.log("failed");
//     }
// })

// console.log("This is 2st line");