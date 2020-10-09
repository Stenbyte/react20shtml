const backToButton = document.getElementById
("back-to-top");
const width = window.matchMedia("(max-width: 576px)");

const search = document.getElementById("search-form");
const navbar = document.getElementById("main-nav");
const main = document.getElementById("main-content");
const sticky = navbar.offsetTop;
const menu = document.getElementById("menu");
const openM = document.getElementById("openMenu");
const closeM = document.getElementById("closeMenu");


window.onscroll = () => stickyMenu();

window.onscroll = () => scrollCheck();

const scrollCheck = () => {
if (
    document.body.scrollTop > 200 ||
    (document.documentElement.scrollTop > 200 && !width.matches)
) {
    backToButton.style.display = "flex";
} else {
    backToButton.style.display = "none";
  }
};
// BACK TO TOP BUTTON
// based on tutorial: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Search 

const showHide = () => {
    search.classList.toggle("hide");
};

// FIXED MENU
// based on tutorial: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
const stickyMenu = () => {
    if (window.pageYOffset >= sticky && !width.matches) {
      navbar.classList.add("sticky");
      main.classList.add("space");
    } else {
      navbar.classList.remove("sticky");
      main.classList.remove("space");
    }
  };

  // MOBILE MENU

const openMenu = ()=> {
    closeM.classList.toggle("hide");
    menu.style.display = 'block';
  }
  
  const closeMenu = () => {
    closeM.classList.toggle("hide");
    menu.style.display = 'none';
  }