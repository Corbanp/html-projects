// footerLoader.js
function includeFooter() {
    var footer = document.createElement('footer');
    footer.innerHTML = '<object type="text/html" data="footer.html" ></object>';
    document.body.appendChild(footer);
}
includeFooter();
