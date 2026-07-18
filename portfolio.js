emailjs.init("4dDlPwpuWW9nIv_gB");
let hamburger =document.querySelector(".bar");
let dropdown =document.querySelector(".bar-list");
hamburger.addEventListener("click",function(){
   dropdown.classList.toggle("show");
});
let toast=document.querySelector(".toaster");
window.addEventListener("load",function(){
   toast.classList.add("display");
})
setTimeout(() => {
   toast.classList.remove("display");
}, 3000);
let  btn1=document.querySelector(".buttoncard1");
let  btn2=document.querySelector(".buttoncard2");
let  btn3=document.querySelector(".buttoncard3");
btn1.addEventListener("click",function(){
   window.location.href="https://dellapplicant-tech.github.io/Airbnb-Homepage/";
})
btn2.addEventListener("click",function(){
   window.location.href="https://dellapplicant-tech.github.io/Amazon-home-page/";
})
btn3.addEventListener("click",function(){
   window.location.href=" https://dellapplicant-tech.github.io/Calculator/";
})

let form = document.querySelector("form");
let email =document.querySelector("#email");
let p = document.querySelector("#para");
form.addEventListener("submit",function(e){
 e.preventDefault();
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   let  emailtest=emailRegex.test(email.value);
 if(!emailtest){
    p.style.display="initial";
 }
 else{
    p.style.display="none";
 }

emailjs.sendForm(

"service_fb0znj7",

"template_kc7dagf",

this

)

.then(function(){

alert("Message Sent Successfully 🚀");

form.reset();

})

.catch(function(error){

console.log(error);

alert("Failed");

});


})

const card = document.querySelector(".intro-card");
const profileimg=document.querySelector(".profile-image");
const project=document.querySelector(".projects");
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{
opacity:0,
transform:"translateY(60px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],
{
duration:900,
fill:"forwards",
easing:"ease-out"
}

)

observer.unobserve(entry.target)

}

})

})

observer.observe(card)
observer.observe(profileimg)
observer.observe(project)

