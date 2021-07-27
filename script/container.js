const sprite = "/asset/icons_sprite.svg";
//predefined functions
const createNode = function (nodeName, idName, className) {
  const div = document.createElement(nodeName);
  if (idName) div.id = idName;
  if (className) div.className += className;
  return div;
};
const createSvgIcon = function (iconId) {
  const svgNamespace = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNamespace, "svg");
  svg.classList.add("svg_icons");

  const use = document.createElementNS(svgNamespace, "use");
  use.setAttribute("href", `${sprite}#${iconId}`);
  svg.appendChild(use);

  return svg;
};
const createNavItem = function (nav_svg_id, item_label) {
  const anchor = createNode("a", false, "nav_items");

  const svg = createSvgIcon(nav_svg_id);
  anchor.appendChild(svg);

  const div = document.createElement("div");
  const label =
    item_label != null
      ? item_label
      : nav_svg_id.charAt(0).toUpperCase() + nav_svg_id.slice(1);
  div.append(label);
  anchor.appendChild(div);

  return anchor;
};

//header(2 childs, titile and menu icon)
const header = document.createElement("header");
document.body.appendChild(header);

//header(1/2 title)
const title = document.createElement("a");
title.href = "/index.html";
title.id = "title"; //used in css styling

const titileName = "MathLoverClub.github.io"; //change to host name
title.append(titileName);
title.dataset.text = titileName; //to use in css animation

header.appendChild(title);

//header(2/2 menu)
const menu = createSvgIcon("menu");
header.appendChild(menu);

// nav
const nav = createNode("nav");
document.body.appendChild(nav);

//nav (1/2 nav_overlay)
const navOverlay = createNode("div", "nav_overlay");
nav.appendChild(navOverlay);

//nav (2/2 nav_box)
const navBox = createNode("div", "nav_box");
nav.appendChild(navBox);

navBox.appendChild(createNavItem("toc", "Table of Contents"));
navBox.appendChild(createNavItem("menu")); //change to login
navBox.appendChild(createNavItem("download"));

const theme = createNavItem("palette-fill", "Theme");
navBox.appendChild(theme);

navBox.appendChild(createNavItem("palette", "Theme"));
navBox.appendChild(createNavItem("settings"));

const menuSVG = menu.getElementsByTagName("use")[0];
const MenuOpenLink = `${sprite}#menu-open`;
const MenuLink = `${sprite}#menu`;
menu.onclick = function () {
  menuSVG.setAttribute("href", MenuOpenLink);
  navOverlay.style.visibility = "visible";
  navBox.classList.toggle("nav_box_opened"); //add
};
navOverlay.onclick = function () {
  menuSVG.setAttribute("href", MenuLink);
  navOverlay.style.visibility = "hidden";
  navBox.classList.toggle("nav_box_opened"); //remove
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then((registration) => {
      console.log(
        `service worker registration successed with the scope ${registration.scope}`
      );
    })
    .catch((err) => {
      console.log(`service worker registration failed with the error ${err}`);
    });
}
