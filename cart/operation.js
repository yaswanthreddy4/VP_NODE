let opeartion_fruite = require('./fruitinfo')
let opearation_userinfo = require('./userinfo')
for (loop = 0; loop < 4; loop++) {
    let prompt1 = process.openStdin();
    prompt1.addListener("data", function(parameter) {
        let input = parameter.toString()
        console.log(input);

        if (input == "opeartion_fruite.fruitInfo[0].name") {
            console.log("hey baby");

        } else if (input == "opeartion_fruite.fruitInfo[1].name") {

        } else if (input == "opeartion_fruite.fruitInfo[2].name") {

        } else if (input == "opeartion_fruite.fruitInfo[3].name") {

        } else if (input == "opeartion_fruite.fruitInfo[4].name") {

        } else if (input == "opeartion_fruite.fruitInfo[5].name") {

        } else {
            console.log("bye");

        }

    })
}