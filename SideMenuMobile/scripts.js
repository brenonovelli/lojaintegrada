document.addEventListener("DOMContentLoaded", function (event) {
  const iconAtalhoMenu = document.querySelector(".atalho-menu");
  const iconMenuSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  iconAtalhoMenu.insertAdjacentHTML("afterbegin", iconMenuSVG);
  iconAtalhoMenu.classList.remove("icon-th", "botao", "principal");

  const ulAtalhosMobile = document.querySelector(".atalhos-mobile ul");

  const newItemSideMenu = document.createElement("li");
  newItemSideMenu.classList.add("menu-button");
  ulAtalhosMobile.prepend(newItemSideMenu);

  newItemSideMenu.append(iconAtalhoMenu);

  const menuLateral = document.querySelector(".menu.superior > ul");

  const closeMenuButton = document.createElement("button");
  closeMenuButton.classList.add("closeMenuButton");
  menuLateral.append(closeMenuButton);

  closeMenuButton.onclick = () => {
    menuLateral.classList.remove("active");
  };
});
