var j=document.querySelector("#spareform").addEventListener('submit',play)
var sparedata=JSON.parse(localStorage.getItem('wishlist'))||[]
function play(){
    
    event.preventDefault();
    var spares={
        // image:spareform.products.items.imgurl.value,
        

        image:"https://spareshub.com/pub/media/catalog/product/placeholder/default/xno_image_3.png.pagespeed.ic.CL0sy0K3dL.webp",
        items:document.querySelector("#itemname").innerText,
    }
   document.grt
  
    sparedata.push(spares)
    console.log(spares) 
    
    localStorage.setItem('wishlist',JSON.stringify(sparedata))



    


    
    window.location.href="cart.html"


}




// let carts=document.querySelectorAll(".addcart")
// let products=[
    
 

// ]
// for(let i=0;i<carts.length;i++){
//     carts[i].addEventListener('click',()=>{
//         cartNumbers(products[i])
//     })
// }
// function onLoadCartNumbers(){
//     let productNumbers=localStorage.getItem('cartNumbers');
//     if(productNumbers){
//         document.querySelector('#count').textContent=productNumbers;
//     }
// }
// function cartNumbers(product) {
//     console.log("The product clicked is",product)
//     event.preventDefault()
//     let productNumbers=localStorage.getItem('cartNumbers');
//     productNumbers=parseInt(productNumbers);
//     if(productNumbers){
//         localStorage.setItem('cartNumbers',productNumbers+1)
//         document.querySelector("#count").textContent=productNumbers+1;
//     }
//     else{
//         localStorage.setItem('cartNumbers',1)
//         document.querySelector("#count").textContent=1;
//     }
// //   localStorage.setItem('cartNumbers',1)



// }
// onLoadCartNumbers();
