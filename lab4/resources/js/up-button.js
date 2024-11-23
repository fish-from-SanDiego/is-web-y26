{
    const buttonElement = document.querySelector('.main__up-button');

    window.addEventListener('scroll', hideUpButtonIfNeeded);
    buttonElement.addEventListener('click', onUpButtonClick);
    buttonElement.addEventListener('touchStart', (e) => {
        e.preventDefault();
    }, false);

    function onUpButtonClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function hideUpButtonIfNeeded() {
        const footerElement = document.querySelector('.page-footer');
        const windowHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const footerCoords = footerElement.getBoundingClientRect();
        const buttonElement = document.querySelector('.main__up-button');
        const buttonClasses = buttonElement.classList;
        if (!buttonElement) return;
        if (window.scrollY === 0 || (footerCoords.top - windowHeight) <= 0)
            buttonClasses.add('main__up-button--hidden');
        else
            buttonClasses.remove('main__up-button--hidden');
    }
}