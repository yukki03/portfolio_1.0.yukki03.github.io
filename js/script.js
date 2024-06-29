let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}




menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


class MobileNavBar {
    constructor(mobileMenu){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }


    addClickEvent(){
        this.mobileMenu.addEventListener("click", () => console.log("dale B)"));
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new mobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);


const translations = {
    en: {
        selct : "Select a Language",
        title : "Welcome to my MultiLanguage Portifolio",
        pargr : "Lorem ipsum",
    },
    pt: {
        selct : "Selecione um Idioma",
        title : "Seja bem-vindo ao meu Portifolio MultiLinguas ",
        pargr : "Lorem ipsum",        
    }

}

const languageSelectop = document.querySelector("select");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if( language == "pt"){
        console.log(language);
    }else if (language == "en"){
        console.log(language)
    }
}