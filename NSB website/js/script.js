function hamburger(){
    var nav = document.getElementById("responsive_navbar");
    if (nav.style.display === "") {
        nav.style.display = "block";
    } 
    else if (nav.style.display === "none"){
        nav.style.display ="block";
    }
    else {
        nav.style.display = "none"
    }
}

function sendMailResume() {    
    window.location.replace(`mailto: resume1@nsbrecruitments.in?subject=Application for available opening`);    
}

function sendMailContact() {    
    window.location.replace(`mailto: resume1@nsbrecruitments.in`);
}