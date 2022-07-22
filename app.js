const btn = document.querySelector('.nav-btn');
const links = document.querySelector('.links');
const removeItem = document.getElementsByClassName('btn-red');


//navbar
btn.addEventListener('click', function open(){
    links.classList.toggle ("show-links");
})

for(let i = 0; i < removeItem.length; i++){
    const button = removeItem[i];
    button.addEventListener('click', function(event){
        const buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    })
}

function updateCartTotal(){
    const cartItemContainer = document.getElementsByClassName('cart-items')[0]
    const cartRows = cartItemContainer.getElementsByClassName('item-cart')
    for(let i = 0; i < cartRows.length; i++){
        const cartRow = cartRows[i];
        let priceELement = cartRow.getElementsByClassName('price');
        let quantity = cartRow.getElementsByClassName('quantity');
        console.log(priceELement, quantity)
    }
}