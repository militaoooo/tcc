// ------- MENU HAMBURGUER
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    if(nav.classList.contains("active"))
        document.querySelector('.header').classList.add('change-header-position');
    else
        document.querySelector('.header').classList.remove('change-header-position');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// -------- FECHA O MENU QUANDO OS LINKS SÃO CLICADOS
const links = document.querySelectorAll('header nav ul li a')
const header = document.getElementById('header')


for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('active')
    header.classList.remove
    ('change-header-position')
  })

}

/* Botão voltar para o topo */
 window.addEventListener('scroll', function() {
  let scroll = document.querySelector('.scrollTop')
  scroll.classList.toggle('active', window.scrollY > 650)
 })

 function backTop(){
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  })
 }







