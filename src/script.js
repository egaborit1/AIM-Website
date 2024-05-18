document.addEventListener("DOMContentLoaded", function() {
    const text = "Dominican University Colorstack Computer Society";
    const typingSpeed = 50; // Typing speed in milliseconds (decreased for faster typing)
    let i = 0;
    const titleElement = document.getElementById("title");
    titleElement.innerHTML = "";

    function typeWriter() {
        if (i < text.length) {
            titleElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            titleElement.classList.remove('typing-animation'); // Remove the cursor after typing is done
        }
    }

    typeWriter();
});
