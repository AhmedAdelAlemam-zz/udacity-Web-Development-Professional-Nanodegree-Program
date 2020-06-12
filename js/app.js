/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navMenu = document.getElementById("navbar__list");
const sectionsItem = document.querySelectorAll(".landing__container");
let navListItem;
let anchorLink;
/**
 * End Global Variables

 * Begin Main Functions
 *
 */
(function buildNav() {
  sectionsItem.forEach((item, i) => {
    const sectionsId = item.parentElement.getAttribute("id");
    const sectionParent = item.parentElement;

    // build the nav menu
    navListItem = document.createElement("li");
    //build anchor links
    anchorLink = document.createElement("a");
    anchorLink.setAttribute("href", `#${sectionsId}`);
    anchorLink.innerHTML = `Section ${i + 1}`;
    anchorLink.className = "menu__link";
    // aapend anchor links to nav menu
    navListItem.append(anchorLink);
    //append nav menu to ul element
    navMenu.append(navListItem);
    // Scroll to section on link click

    anchorLink.addEventListener("click", function (e, respond = null) {
      e.preventDefault();
      setTimeout(() => {
        // Add class 'active' to section when near top of viewport

        if (sectionParent) {
          // Set sections as active
          sectionParent.classList.add("your-active-class");
        }
        // Scroll to anchor ID using scrollBy event

        const distanceToTop = (el) =>
          Math.floor(el.getBoundingClientRect().top);
        var targetID = respond
          ? respond.getAttribute("href")
          : this.getAttribute("href");
        const targetAnchor = document.querySelector(targetID);
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({
          top: originalTop,
          behavior: "smooth",
        });
      }, 200);
    });
  });
})();

/**
 * End Main Functions
 */
