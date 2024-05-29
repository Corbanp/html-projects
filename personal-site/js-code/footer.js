// footer.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("footer.html")
        .then(response => response.text())
        .then(html => {
            document.querySelector("footer").innerHTML = html;
        });
});
