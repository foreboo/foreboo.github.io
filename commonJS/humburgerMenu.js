{   'use strict'
    let isHumburgerMenuDisplayed = false;
    const humburgerMenu = document.querySelector("#humburgerMenu");
    const humburgerButton = document.querySelector("#humburgerButton");
    const showHumburgerMenu = () => {
        const headerHight = document.querySelector("#headerForPhone").offsetHeight;
        humburgerMenu.style.top = `${headerHight}px`;
        isHumburgerMenuDisplayed = true;
    };
    const hideHumburgerMenu = () => {
        humburgerMenu.style.top = "100%"
        isHumburgerMenuDisplayed = false;
    };

    humburgerButton.onclick = () => {
        if(isHumburgerMenuDisplayed) hideHumburgerMenu();
        else showHumburgerMenu();
    };
    document.addEventListener("click", (event) => {
        if((event.target.closest("#humburgerMenu, #humburgerButton") === null) && isHumburgerMenuDisplayed) {
            hideHumburgerMenu();
        }
    });
}