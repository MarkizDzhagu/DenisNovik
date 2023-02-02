document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.header').classList.toggle('_active');
    document.body.classList.toggle('_lock');
}

const menuLinks = document.querySelectorAll('.header-list__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if (document.querySelector('.menu-icon').classList.contains('menu-icon-active')) {
                document.body.classList.remove('_lock');
                document.querySelector('.header').classList.remove('_active');
                document.querySelector('.menu-icon').classList.remove('menu-icon-active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

