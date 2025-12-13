document.addEventListener("DOMContentLoaded", () => {
  //   window.alert("loaded");
  const menu_options = document.querySelector(".menu_options");
  const menu_button = document.querySelector(".menu_button");

  menu_button.addEventListener("click", () => {
    if (
      menu_options.style.display == "none" ||
      menu_options.style.display == ""
    ) {
      menu_options.style.display = "flex";
    } else if (menu_options.style.display == "flex") {
      menu_options.style.display = "none";
    }
  });

  //trigger the menu options when the menu button is clicked...
});
