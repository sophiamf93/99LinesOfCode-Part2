const friends = [
    {
        name: "Logan"
    },

    {
        name: "Dallas"
    },

    {
        name: "Taylor"
    },

    {
        name: "Aine"
    },

    {
        name: "Logay"
    }
]

let body = document.body;
    let buttonCreate = document.createElement("button");
    let buttonText = document.createTextNode("Sing!");

    window.addEventListener("DOMContentLoaded", function () {
    buttonCreate.appendChild(buttonText);
    body.appendChild(buttonCreate);
    }
    )

    buttonCreate.addEventListener("click", function () {
        
    }

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].name);

    for (let song = 99; song > 0; song--) {
        j = song - 1;
        if (song != 1) {
            wordLine = "lines";
        } else {
            wordLine = "line";
        }
        if (j != 1) {
            wordLine2 = "lines";
        } else {
            wordLine2 = "line";
        }
        console.log(song + " " + wordLine + " of code in the file,");
        console.log(song + " " + wordLine + " of code,");
        console.log(friends[i].name + " " + "strikes one out, clears it all out,");
        if (j != 0) {
            console.log(j + " " + wordLine2 + " of code in the file.");
        } else {
            console.log("No more lines of code in the file!");
        }
    }

}
