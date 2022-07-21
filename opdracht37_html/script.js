  
let toggleNavStatus = false;


let toggleNav = function() {
    let getNavbar = document.querySelector(".navbar");
    let getNavbarUl = document.querySelector(".navbar ul")
    let getNavbarLinks = document.querySelectorAll(".navbar a")
    
   

    if (toggleNavStatus === false){
        getNavbarUl.style.visibility = "visible";
        getNavbar.style.opacity = "0.5";
    
        let arrayLength = getNavbarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getNavbarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }
    

    else if(toggleNavStatus === true){
        
        getNavbar.style.opacity = "0";
    
        let arrayLength = getNavbarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getNavbarLinks[i].style.opacity = "0";
        }
        getNavbarUl.style.visibility = "hidden";
        toggleNavStatus = false;
     }
    }