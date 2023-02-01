/* 
  loosely based on this:
  https://medium.com/front-end-weekly/how-to-build-reusable-html-components-without-component-based-frameworks-2f7747f4c5db
*/
class GeneralStyle extends HTMLElement {
  connectedCallback() {
    let reader = new XMLHttpRequest();
    reader.open("get", "/templates/general-style.html");
    reader.onreadystatechange = () => {
      let txt = reader.responseText;
      this.innerHTML = txt;
    };
    reader.send();
  }
}
customElements.define("general-style", GeneralStyle);
class LogoLoader extends HTMLElement {
  connectedCallback() {
    let reader = new XMLHttpRequest();
    reader.open("get", "/templates/logo.html");
    reader.onreadystatechange = () => {
      let txt = reader.responseText;
      this.innerHTML = txt;
    };
    reader.send();
  }
}
customElements.define("logo-loader", LogoLoader);
class Navigation extends HTMLElement {
  connectedCallback() {
    let reader = new XMLHttpRequest();
    reader.open("get", "/templates/navigation.html");
    reader.onreadystatechange = () => {
      let txt = reader.responseText;
      this.innerHTML = txt;
    };
    reader.send();
  }
}
customElements.define("navigation-loader", Navigation);
function showMenu() {
  let openWidth = "70%";
  let navBar = document.getElementById("menu");
  let menuBtn = document.getElementById("menu-btn");
  if (navBar.style.width === openWidth) {
    menuBtn.innerHTML = "menu";
    navBar.style.width = 0;
    menuBtn.style.color = "white";
  } else {
    navBar.style.width = openWidth;
    menuBtn.innerHTML = "close";
    menuBtn.style.color = "black";
  }
}
