/* Terminal */
const terminalInput =
    document.getElementById("terminalInput");

const terminalOutput =
    document.getElementById("terminalOutput");

if (terminalInput) {

    terminalInput.addEventListener(
        "keypress",
        function(e) {

            if (e.key === "Enter") {

                const command =
                    terminalInput.value.toLowerCase();

                terminalOutput.innerHTML += `

<div>
C:\\me> ${command}
</div>

`;

                let response = "";

                switch (command) {

                    case "help":

                        response = `
help - daftar command<br>
about - tentang saya<br>
skill - skill saya<br>
project - daftar project<br>
contact - kontak<br>
clear - bersihkan terminal
`;

                        break;

                    case "about":

                        response =
                            "Saya Heru Cahyono, web developer minimalis";

                        break;

                    case "skill":

                        response =
                            "HTML, CSS, Bootstrap, JavaScript, PHP, Laravel";

                        break;

                    case "project":

                        response =
                            "MyTools, FutureTech, OnyxTech";

                        break;

                    case "contact":

                        response =
                            "Email: herucahyonom@gmail.com";

                        break;

                    case "clear":

                        terminalOutput.innerHTML = "";

                        terminalInput.value = "";

                        return;

                    default:

                        response =
                            "Command tidak ditemukan";

                }

                terminalOutput.innerHTML += `

<div class="mb-3">
${response}
</div>

`;

                terminalInput.value = "";

                terminalOutput.scrollTop =
                    terminalOutput.scrollHeight;

            }

        });

}