// debut nav

const menur = () => {
    const btnresponsive=
    document.querySelector('.burger');

    const nav = document.querySelector('.nav-links')

    // le click

    btnresponsive.addEventListener('click', () => {
    
    // lancer animation css

        btnresponsive.classList.toggle('active');
        nav.classList.toggle('nav-active')

    });
}

// void (fonction)

menur();