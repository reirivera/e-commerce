const btn = document.querySelector('.nav-btn');
const items = document.querySelector('.items');
const exit = document.querySelector('.exit')

btn.addEventListener('click', function open(){

    if(items.classList.contains('show-items')){
        items.classList.remove('show-items')
    }else{
        items.classList.add('show-items')
    }
})
