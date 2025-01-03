const contact = document.querySelector("#contact");
const footer = document.querySelector(".footer-section");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const twitter = document.querySelector("#twitter");
const social = document.querySelector("#social");
const instagram = document.querySelector("#instagram");
const linkedln = document.querySelector("#linkedln");
const internships = document.querySelector("#internship");
const intern = document.querySelector(".internship-section");
const services = document.querySelector("#service");
const container = document.querySelector(".container");


//go to internship section
const handleIntern = () => {
    window.scrollTo({
        top: intern.offsetTop, 
        behavior: "smooth"
    });

    setTimeout(() => {
    intern.style.color = "#1679AB";
    services.style.color = "#1679AB";

    }, 1000);

    setInterval(() => {
        intern.style.color = "";
        services.style.color = "";
    }, 2000);
}

internships.addEventListener("click" , handleIntern);


//go to about us
const handleAbout = () => {
    window.scrollTo({
        top: about.offsetTop,
        behavior: "smooth"
    });
}

about.addEventListener("click" , handleAbout);

//go to home section
const handleHome = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

home.addEventListener("click" , handleHome);


//go to footer(social pages)
const handleContact = () => {
     window.scrollTo({
        top: footer.offsetTop,
        behavior: "smooth"
    });

    setTimeout(() => {
        social.style.color = "#1679AB";
       twitter.style.color = "#1679AB"; 
       instagram.style.color = "#1679AB"; 
       linkedln.style.color = "#1679AB"; 

    }, 1000);

    setInterval(() => {
        social.style.color = "";
        twitter.style.color = "";
        instagram.style.color = ""; 
       linkedln.style.color = ""; 
    }, 2000);
}

contact.addEventListener("click" , handleContact);


//navbar color change when usert scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) { 
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});


//container color chnage when user scroll
window.addEventListener("scroll" , function(){
    if(window.scrollY > 50){
        container.style.backgroundColor = "#31363F";
        container.style.color = "white";

    }else{
        container.style.backgroundColor = "";
        container.style.color = "";
    }
});