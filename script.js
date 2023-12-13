//fucntion for Greeting
(function getGreeting() {
    const currentHour = new Date().getHours();
    let greeting=document.querySelector('#greeting');
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting.innerHTML='Good Morning !';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting.innerHTML='Good Afternoon !';
    } else {
        greeting.innerHTML='Good evening !';
    }
  })();
  


let afterHoverBox=document.querySelector(".afterHoverBox");

let FloatingImage=document.querySelector(".FloatingImage");
FloatingImage.addEventListener('mouseenter',function(){
    afterHoverBox.style.opacity=1;
    afterHoverBox.style.scale=1;
})
FloatingImage.addEventListener('mouseleave',function(){
    afterHoverBox.style.opacity=0;
    afterHoverBox.style.scale=0;
})
   