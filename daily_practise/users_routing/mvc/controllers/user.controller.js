module.exports.user1 = (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res
        .status(200)
        .json({
            employeeName: "yaswanth",
            employeeId: 3566767,
            employeeDesignation: "FullStack Developer",
            employeeSalary: 99000
        });
};
module.exports.user2 = (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res
        .status(200)
        .json({
            employeeName: "reddy",
            employeeId: 3566768,
            employeeDesignation: "Test Engineer",
            employeeSalary: 92000
        });
};
module.exports.user3 = (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res
        .status(200)
        .json({
            employeeName: "chintha",
            employeeId: 3566769,
            employeeDesignation: "Admin",
            employeeSalary: 80000
        });
};
module.exports.user4 = (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res
        .status(200)
        .json({
            employeeName: "ravi",
            employeeId: 3566770,
            employeeDesignation: "HR",
            employeeSalary: 95000
        });
};
module.exports.allusers = (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res
        .status(200)
        .json([{
                employeeName: "yaswanth",
                employeeId: 3566767,
                employeeDesignation: "FullStack Developer",
                employeeSalary: 99000
            },
            {
                employeeName: "reddy",
                employeeId: 3566768,
                employeeDesignation: "Test Engineer",
                employeeSalary: 92000
            },
            {
                employeeName: "chintha",
                employeeId: 3566769,
                employeeDesignation: "Admin",
                employeeSalary: 80000
            },
            {
                employeeName: "ravi",
                employeeId: 3566770,
                employeeDesignation: "HR",
                employeeSalary: 95000
            }
        ]);
};