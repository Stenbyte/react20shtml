const backToButton = document.getElementById
("back-to-top");
const width = window.matchMedia("(max-width: 576px)");



const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

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