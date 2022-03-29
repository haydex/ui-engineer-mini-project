window.addEventListener("load", (event) => {
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(element => {
        element.addEventListener("click", navClickHandler);
    });

    function navClickHandler(event) {
        event.target.parentNode.childNodes.forEach(element => {
            element.classList.remove("active");
        });
        event.target.classList.add("active");
    }
});