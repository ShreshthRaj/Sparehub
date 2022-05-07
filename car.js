var dataVegetables = [
  
   
    {
        image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
        name: 'Organic Blackberries',
        price: '500$',
        
        
    },
    {
        image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
        name: 'Organic Blackberries',
        price: '500$',
        
            },
  
    {
        image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
        name: 'Organic Blackberries',
        price: '500$',
        
    },
    {
        image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
        name: 'Organic Blackberries',
        price: '500$',
        
    },
    {
        image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
        name: 'Organic Blackberries',
        price: '500$',
        
    },
    { image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
    name: 'Organic Blackberries',
    price: '500$',
    
    },
    {
        image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
        name: 'Organic Blackberries',
        price: '500$',
        
    },
    { image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
    name: 'Organic Blackberries',
    price: '500$',
    
    },
  
]

var cartData = JSON.parse(localStorage.getItem('cartItem')) || [];


var cardContainer = document.querySelector('#spareform');
var cardContainer1 = document.querySelector('#products');
var cartItemCount = document.querySelector('#cart_item_count');
// var loginBtn = document.querySelector('#loginBtn');
var cart = document.querySelector('#carts');
cart.addEventListener('click', goCart);
var total = cartData.reduce((total, elem) => {
    return total+elem.count;
},0)
console.log(cartData);
cartItemCount.innerText = total;
if(cartItemCount.innerText != '0'){
    cart.style.backgroundColor = 'rgb(10, 173, 10)';
    cart.style.color = 'white';
    loginBtn.style.backgroundColor = '#f6f7f8';
    loginBtn.style.color = '#343538';
}

document.querySelector('#btnLeft').addEventListener('click', funLeftBtn);
document.querySelector('#btnRight').addEventListener('click', funRightBtn);
document.querySelector('#btnLeft1').addEventListener('click', funLeftBtn1);
document.querySelector('#btnRight1').addEventListener('click', funRightBtn1);
var node = 0;
var k=6;


function funRightBtn(){
    
    var card = document.querySelectorAll('.card');
    if(node < card.length){
        for(var i=0; i<dataVegetables.length; i++){
            card[i].classList.add('hidden');
            card[i].classList.remove('visible')
        }
        for(var i=node; i<dataVegetables.length; i++){
            card[i].classList.remove('hidden');
            card[i].classList.add('visible')
            if(i == node+k-1 || i==dataVegetables.length-1){
                node=node+k;
                break;
            }
        }
    }
}
function funLeftBtn(){
    var card = document.querySelectorAll('.card');
    if(node > k ){
        for(var i=0; i<dataVegetables.length; i++){
            card[i].classList.add('hidden');
        }
        node = node-(k*2)
        for(var i=node; i<dataVegetables.length; i++){
            card[i].classList.remove('hidden');
            card[i].classList.add('visible')
            if(i == node+k-1){
                node=node+k;
                break;
            }
        }
    }
}

var node1 = 0;
var k1=6;

function funRightBtn1(){
    var card = document.querySelectorAll('.card1');
    if(node1 < card.length){
        for(var i=0; i<dataFruit.length; i++){
            card[i].classList.add('hidden');
            card[i].classList.remove('visible')
        }
        for(var i=node1; i<dataFruit.length; i++){
            card[i].classList.remove('hidden');
            card[i].classList.add('visible')
            if(i == node1+k1-1 || i==dataFruit.length-1){
                node1=node1+k1;
                break;
            }
        }
    }
    
}
function funLeftBtn1(){
    var card = document.querySelectorAll('.card1');
    if(node1 > k1 ){
        for(var i=0; i<dataFruit.length; i++){
            card[i].classList.add('hidden');
        }
        node1 = node1-(k1*2)
        for(var i=node1; i<dataFruit.length; i++){
            card[i].classList.remove('hidden');
            card[i].classList.add('visible')
            if(i == node1+k1-1 ){
                node1=node1+k1;
                break;
            }
        }
    }
}
dataVegetables.map((element, index) => {
    
    var card = document.createElement('div');
    card.className = 'card hidden';
    var imgDiv = document.createElement('div');
    var img = document.createElement('img');
    img.src = element.image;
    imgDiv.append(img);
    var textDiv = document.createElement('div');
    textDiv.className = 'text-content';
    var priceDiv = document.createElement('div');
    var price = document.createElement('span');
    price.textContent = `$ ${element.price}`
    price.className = 'price';
    priceDiv.append(price);
    var spn = document.createElement('span');
    spn.innerText = element.priceTx;
    spn.style.fontSize = '13px';
    spn.style.marginLeft = '5px'
    priceDiv.append(spn);
    var nameDiv = document.createElement('div');
    nameDiv.innerText = element.name;
    nameDiv.className = 'product-name';
    var type = document.createElement('div');
    type.innerText = element.type;
    if(element.type == 'Organic'){
        type.style.color = 'blue';
        type.style.fontSize = '13px';
    }
    var qtyDiv = document.createElement('div');
    qtyDiv.innerText = element.qty;
    qtyDiv.className = 'qty';
    textDiv.append(priceDiv,type,nameDiv, qtyDiv);
    


    var addCart = document.createElement('div');
    addCart.className = 'addGroup';
    var btn = document.createElement('button');
    btn.innerHTML = `<span>+</span> Add`;
    btn.addEventListener('mouseenter', ()=>{
        btn.innerHTML = `<span>+</span> Add to cart`;
    })
    btn.addEventListener('mouseout', ()=>{
        btn.innerHTML = `<span>+</span> Add`;
    })
    btn.addEventListener('click', ()=>{
        hvr(element, index);
    })
    addCart.appendChild(btn);
    card.append(addCart,imgDiv,textDiv);
    cardContainer.append(card);
})

// dataFruit.map((element, index) => {
    
    
//     var card = document.createElement('div');
//     card.className = 'card1 hidden';
//     var imgDiv = document.createElement('div');
//     var img = document.createElement('img');
//     img.src = element.image;
//     imgDiv.append(img);
//     var textDiv = document.createElement('div');
//     textDiv.className = 'text-content';
//     var priceDiv = document.createElement('div');
//     var price = document.createElement('span');
//     price.textContent = `$ ${element.price}`
//     price.className = 'price';
//     priceDiv.append(price);
//     var spn = document.createElement('span');
//     spn.innerText = element.priceTx;
//     spn.style.fontSize = '13px';
//     spn.style.marginLeft = '5px'
//     priceDiv.append(spn);
    
//     var nameDiv = document.createElement('div');
//     nameDiv.innerText = element.name;
//     nameDiv.className = 'product-name';
//     var type = document.createElement('div');
//     type.innerText = element.type;
//     if(element.type == 'Organic'){
//         type.style.color = 'blue';
//         type.style.fontSize = '13px';
//     }
//     var qtyDiv = document.createElement('div');
//     qtyDiv.innerText = element.qty;
//     qtyDiv.className = 'qty';
//     textDiv.append(priceDiv,type,nameDiv, qtyDiv);


//     var addCart = document.createElement('div');
//     addCart.className = 'addGroup';
//     var btn = document.createElement('button');
//     btn.innerHTML = `<span>+</span> Add`;
//     btn.addEventListener('mouseenter', ()=>{
//         btn.innerHTML = `<span>+</span> Add to cart`;
//     })
//     btn.addEventListener('mouseout', ()=>{
//         btn.innerHTML = `<span>+</span> Add`;
//     })
//     btn.addEventListener('click', ()=>{
//         hvr(element, index);
//     })
//     addCart.appendChild(btn);
//     card.append(addCart,imgDiv,textDiv);
//     cardContainer1.append(card);
// })

funRightBtn();
funRightBtn1();

function hvr(element, idx){
    if(cartData.length > 0){
        var flag = false;
        for(var i=0; i<cartData.length; i++){
            if(cartData[i].index == idx){
                cartData[i].count = cartData[i].count+1;
                flag =false;
                break;
            }
            else{
                flag = true;
            }
        }
        if(flag){
            cartData.push({index:idx, elem:element, count:1});
        }
    }
    else{
        cartData.push({index:idx, elem:element, count:1});
    }

    // cartData.push(element);
    var total = cartData.reduce((total, elem) => {
        return total+elem.count;
    },0)
    cartItemCount.innerText = total;
    if(cartItemCount.innerText != '0'){
        cart.style.backgroundColor = 'rgb(10, 173, 10)';
        cart.style.color = 'white';
        loginBtn.style.backgroundColor = '#f6f7f8';
        loginBtn.style.color = '#343538';
    }
    localStorage.setItem('cartItem', JSON.stringify(cartData));
    console.log(cartData);
}

function goCart(){
    window.location.href= 'cart.html';
}