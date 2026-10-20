// Image Drag & Drop
let box = document.getElementById("dropBox");
let input = document.getElementById("imageInput");
let img = document.getElementById("profileImg");
let text = document.getElementById("dropText");

box.onclick = () => input.click();

input.onchange = showImage;

box.ondragover = (e) => {
    e.preventDefault();
};

box.ondrop = (e) => {
    e.preventDefault();
    input.files = e.dataTransfer.files;
    showImage();
};

function showImage() {
    let file = input.files[0];

    if (file) {
        img.src = URL.createObjectURL(file);
        img.style.display = "block";
        text.style.display = "none";
    }
}


// Contact Form Validation
document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("result");

    if (name === "" || email === "" || message === "") {
        result.innerHTML = "⚠️ Please fill all fields.";
        result.style.color = "#f87171";
    }
    else if (!email.includes("@")) {
        result.innerHTML = "⚠️ Enter a valid email.";
        result.style.color = "#f87171";
    }
    else {
        result.innerHTML = "✅ Message sent successfully!";
        result.style.color = "#4ade80";
        document.getElementById("contactForm").reset();
    }
};