//  import axios from '../../node_modules/axios/index.js';
// import axios from 'axios'
 let addToCart=document.querySelectorAll('.butttoncart')
let cartCounter=document.querySelector('#cartCounter')
let quantity=document.querySelector('#Quantity')
function updateCart(data)
{
axios.post('/update-cart',data).then(res=>{
    console.log(res);
    cartCounter.innerText=res.data.totalQty
    Command: toastr["success"]("Your Product Added to cart Successfully")
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
      }
      setTimeout(()=>{
        window.location.href='/cart'
             },2000);
  }).catch(err=>{
    Command: toastr["error"]("Something went wrong")

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
      }
  })
    

}
addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let data=JSON.parse(btn.dataset.powder);
        console.log(data)
        updateCart(data);
    })
 })

