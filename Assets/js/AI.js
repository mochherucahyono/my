/* Chat Box */
const chatBox =
    document.getElementById("chatBox");

const userInput =
    document.getElementById("userInput");

const sendBtn =
    document.getElementById("sendBtn");

function kirimPesan() {

    const pesan =
        userInput.value.toLowerCase();

    if (pesan.trim() === "") return;

    chatBox.innerHTML += `

<div class="text-end mb-2">

<strong>Kamu:</strong>

${pesan}

</div>

`;

    let jawaban = "";

    if (pesan.includes("skill")) {

        jawaban =
            "Saya menggunakan HTML, CSS, Bootstrap, dan JavaScript.";

    } else if (pesan.includes("nama")) {

        jawaban =
            "Nama saya Heru Cahyono 👋";

    } else if (pesan.includes("project")) {

        jawaban =
            "Saya memiliki beberapa project seperti MyTools dan OnyxTech.";

    } else if (pesan.includes("kontak")) {

        jawaban =
            "Kamu bisa menghubungi saya lewat halaman kontak 📧";

    } else if (pesan.includes("bug")) {

        jawaban =
            "Bug hanyalah fitur yang belum dipahami 😄";

    } else {

        jawaban =
            "Maaf, saya masih AI sederhana 😅";

    }

    setTimeout(() => {

        chatBox.innerHTML += `

<div class="mb-2">

<strong>AI:</strong>

${jawaban}

</div>

`;

        chatBox.scrollTop =
            chatBox.scrollHeight;

    }, 500);

    userInput.value = "";

}

sendBtn.addEventListener(
    "click",
    kirimPesan
);

userInput.addEventListener(
    "keypress",
    function(e) {

        if (e.key === "Enter") {

            kirimPesan();

        }

    });