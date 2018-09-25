require('./fruitinfo')
require('./userinfo')
let prompt1 = process.openStdin();
prompt1.addListener("data", function(parameter) {
    let input = parameter.toString()
    console.log(input);
    process.exit(0)
})

if (prompt1 = "apple") {
    quantity = process.openStdin();
    quantity.addListener("data", function(parameter) {
        let input = parameter.toString()
        console.log(input);
        process.exit(0)
    })
}