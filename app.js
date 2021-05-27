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

let FriendDiv = document.createElement("div");
FriendDiv.setAttribute("class", "friend");
body.appendChild(FriendDiv);

buttonCreate.addEventListener("click", function () {
    friends.forEach(function (name, index) {
        let FriendHeader = document.createElement("h3");

        FriendHeader.innerText = name.name;
        FriendDiv.appendChild(FriendHeader);
        // FriendDiv.appendChild(FriendParagraph);

        for (let song = 99; song > 0; song--) {
            let FriendParagraph = document.createElement("p");

            j = song - 1;
            wordLine = "lines";
            wordLine2 = "line";

            if (song !== 2 && song !== 1) {

                FriendParagraph.innerHTML = song + " " + wordLine + " of code in the file, " + song + " " + wordLine + " of code, " +
                    name.name + " strikes one out, clears it all out, " + j + " " +
                    wordLine + " of code in the file.";
            } else if (song == 2) {
                FriendParagraph.innerHTML = song + " " + wordLine + " of code in the file, " + song + " " + wordLine + " of code," +
                    name.name + " " + "strikes one out, clears it all out, " + j + " " +
                    wordLine2 + " of code in the file.";
            } else if (song == 1) {
                FriendParagraph.innerHTML = song + " " + wordLine2 + " of code in the file, " + song + " " + wordLine2 + " of code," +
                    name.name + " " + "strikes one out, clears it all out, " + "no more " + " " +
                    wordLine + " of code in the file.";

            }

            FriendDiv.appendChild(FriendParagraph);

        }

    })

})


