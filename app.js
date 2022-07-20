const btn = document.querySelector('.nav-btn');
const links = document.querySelector('.links');

btn.addEventListener('click', function open(){

    links.classList.toggle ("show-links");
})
