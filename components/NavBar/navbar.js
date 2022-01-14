let hamburgerIcon = document.getElementById("hamburger-icon");
let closeIcon = document.getElementById("close-icon");
let navSidebarMobile = document.getElementById("nav-sidebar-mobile");
let isNavigationSidebarVisible = false;

// Listeners
hamburgerIcon.addEventListener("click", () => {
  // If hamburger is not clicked before we would show sidebar otherwise we would hide sidebar
  isNavigationSidebarVisible
    ? navSidebarMobile.setAttribute("style", "display: none")
    : navSidebarMobile.setAttribute("style", "display: block");

  isNavigationSidebarVisible = !isNavigationSidebarVisible;
});

closeIcon.addEventListener("click", () => {
  navSidebarMobile.setAttribute("style", "display: none");
  isNavigationSidebarVisible = !isNavigationSidebarVisible;
});
