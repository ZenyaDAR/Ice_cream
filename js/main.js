const btn = document.querySelector('.burger')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
})