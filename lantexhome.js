document.addEventListener("DOMContentLoaded", () => {
  // sections
  const homeSection = document.querySelector("#home_section");
  const serviceSection = document.querySelector(".Services");

  // menu options
  const homeOption = document.querySelector("#home_option");
  const serviceOption = document.querySelector("#service_option");
  const updatesOption = document.querySelector("#updates_option");
  const aboutOption = document.querySelector("#about_option");

  // trigger the home section when the home option is selected...
  homeOption.addEventListener("click", () => {
    if (
      homeSection.style.display == "" ||
      homeSection.style.display == null ||
      homeSection.style.display == undefined
    ) {
      homeSection.style.display = "flex";
      serviceSection.style.display = "";
    } else if (homeSection.style.display == "flex") {
      homeSection.style.display = "";
      serviceSection.style.display = "flex";
    }
  });

  serviceOption.addEventListener("click", () => {
    console.log(serviceSection.style.display);
    if (
      serviceSection.style.display == "" ||
      serviceSection.style.display == null ||
      serviceSection.style.display == undefined
    ) {
      serviceSection.style.display = "flex";
      homeSection.style.display = "";
    } else if (serviceSection.style.display == "flex") {
      serviceSection.style.display == "";
      homeSection.style.display = "flex";
    }
  });
});
