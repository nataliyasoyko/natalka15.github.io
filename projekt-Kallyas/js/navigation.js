(() => {
    const button = document.querySelector(".js-navigation__button-mobile");
    const menu = document.querySelector(".js-navigation-mobile");
    console.log(button)

    const toggleClass = () => {
        menu.classList.toggle("js-navigation__mobile-open");
    };
    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();