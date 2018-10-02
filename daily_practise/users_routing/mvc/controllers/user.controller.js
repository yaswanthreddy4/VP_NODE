// module.exports.user1 = (req, res) => {
//     res
//         .status(200)
//         .json({
//             employeeName: "yaswanth",
//             employeeId: 3566767,
//             employeeDesignation: "FullStack Developer",
//             employeeSalary: 99000
//         });
// }

// module.exports.user2 = (req, res) => {
//     res
//         .status(200)
//         .json({
//             employeeName: "reddy",
//             employeeId: 3566768,
//             employeeDesignation: "Test Engineer",
//             employeeSalary: 92000
//         });
// };
// module.exports.user3 = (req, res) => {
//     res
//         .status(200)
//         .json({
//             employeeName: "chintha",
//             employeeId: 3566769,
//             employeeDesignation: "Admin",
//             employeeSalary: 80000
//         });
// };
// module.exports.user4 = (req, res) => {
//     res
//         .status(200)
//         .json({
//             employeeName: "ravi",
//             employeeId: 3566770,
//             employeeDesignation: "HR",
//             employeeSalary: 95000
//         });
// };
// module.exports.allusers = (req, res) => {
//     res
//         .status(200)
//         .json([{
//                 employeeName: "yaswanth",
//                 employeeId: 3566767,
//                 employeeDesignation: "FullStack Developer",
//                 employeeSalary: 99000
//             },
//             {
//                 employeeName: "reddy",
//                 employeeId: 3566768,
//                 employeeDesignation: "Test Engineer",
//                 employeeSalary: 92000
//             },
//             {
//                 employeeName: "chintha",
//                 employeeId: 3566769,
//                 employeeDesignation: "Admin",
//                 employeeSalary: 80000
//             },
//             {
//                 employeeName: "ravi",
//                 employeeId: 3566770,
//                 employeeDesignation: "HR",
//                 employeeSalary: 95000
//             }
//         ]);
// };

const user_data = require('../models/data/user_data')
module.exports.allUsers = (req, res, next) => {
    console.log(req.query);
    let offset = 0;
    let count = 4;
    if (req.query && req.query.offset && req.query.count) {
        offset = req.query.offset;
        count = req.query.count;
    }
    let finalUsers = user_data.slice(offset, offset + count);
    res.status(200).json(finalUsers);
}