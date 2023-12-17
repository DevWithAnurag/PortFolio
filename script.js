
//fucntion for Greeting
(function getGreeting() {
    const currentHour = new Date().getHours();
    let greeting = document.querySelector('#greeting');

    if (currentHour >= 5 && currentHour < 12) {
        greeting.innerHTML = 'Good Morning !';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting.innerHTML = 'Good Afternoon !';
    } else {
        greeting.innerHTML = 'Good evening !';
    }
})();



//fcuntion for hover effect
(function hoverEffect() {
    let afterHoverBox = document.querySelector(".afterHoverBox");
    let FloatingImage = document.querySelector(".FloatingImage");
    FloatingImage.addEventListener('mouseenter', function () {
        afterHoverBox.style.opacity = 1;
        afterHoverBox.style.transform = "scale(1)";
    })
    FloatingImage.addEventListener('mouseleave', function () {
        afterHoverBox.style.opacity = 0;
        afterHoverBox.style.transform = "scale(1)";
    })
})()


function lineAnimation(){
    let line=document.querySelector(".line");
    setTimeout(() => {
        line.style.height="120px";
    }, 500);
        
}

function popUpAnimation() {
    let box = document.querySelectorAll(".box");
            box[0].style.transform = "scale(1)";
            box[1].style.transform = "scale(1)";
            box[2].style.transform = "scale(1)";


}



function topAnimation() {
    let top=document.querySelector('.top');
    top.style.height="13%";
}

function AnimatprofileImagee() {
    let profileImage=document.querySelector('.profileImage');
    profileImage.style.transform = "scale(1)";
    profileImage.style.opacity="1";
}

function AnimatenavBar() {
    let navBar=document.querySelector('.navBar');
    navBar.style.transform = "scale(1)";
}



// all function call after body get loaded
function Animation() {
    topAnimation();
   lineAnimation();
   AnimatenavBar()
   AnimatprofileImagee()
   popUpAnimation();//error
}

//function for the sending mail to me.....
function sendMailTome(){
    window.location.href="mailto:you@example.com";
}

//function for showing my work to the user......
function redirectToPage(containerId) {
    document.getElementById(containerId).scrollIntoView({ behavior: 'smooth' });
  }