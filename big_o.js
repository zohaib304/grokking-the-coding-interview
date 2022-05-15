const names = ["alex", "max", "john", "Paul", 'Rich']

function findRich(names) {
    for(let i = 0; i < names.length; i++) {
        if(names[i] === "Rich") {
            console.log("Found")
        }
    }
}


findRich(names)