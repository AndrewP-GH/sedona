(() => {
  const navButton = document.querySelector("#nav-button");
  const navList = document.querySelector("#nav-list");

  console.log(navButton);
  console.log(navList);


  navButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    navList.classList.toggle("menu-list--showed");
  });
})();