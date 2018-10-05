let stdInput = process.openStdin();
stdInput.addListener("data", (d) => {
    // console.log("data", d.toString());
    var name = d.toString()
    console.log("hi", name);
    let vision = (goal, year) => {
        console.log(`${name} has ${goal} goal time line:${year}`)
    }
    vision("heroin", 2018);
    // console.log(process.pid);
    process.exit(0);

})