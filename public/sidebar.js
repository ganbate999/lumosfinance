const btnMenu = document.querySelector('.icon__menu');
const sidebar = document.querySelector('.sidebar');

const body = document.querySelector('body')

btnMenu.onclick = () => {
    sidebar.classList.toggle('active')
    body.classList.toggle('active')
}

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if(scrolled > 0) {
        sidebar.classList.remove('active')
        body.classList.remove('active')

        return
    }
})
