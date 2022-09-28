let lastScroll = 0;

document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && header.classList.contains("fadeDown")) {
        header.classList.remove("fadeDown")
        header.classList.add("fadeUp")
    } else if (currentScroll < lastScroll && header.classList.contains("fadeUp")) {
        header.classList.remove("fadeUp")
        header.classList.add("fadeDown")
    }
    lastScroll = currentScroll;
})