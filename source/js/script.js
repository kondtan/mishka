var navigationToggle = document.querySelector('.navigation__toggle');
var visibleMenu = document.querySelectorAll('.visible-menu-js');

if (visibleMenu) {
  visibleMenu.forEach(function(element) {
    element.classList.remove("visible-menu-js");
    element.classList.add("invisible-menu-js");
  })
  //открываем-закрываем меню на мобильном
  navigationToggle.addEventListener('click', function () {
    visibleMenu.forEach(function(element) {
      if (element.classList.contains('visible-menu-js')) {
        navigationToggle.getElementsByTagName('use')[0].setAttribute("xlink:href", "#icon-menu-open");
        navigationToggle.getElementsByTagName('svg')[0].setAttribute("width", "19.958px");
        navigationToggle.getElementsByTagName('svg')[0].setAttribute("height", "14px");
        element.classList.remove('visible-menu-js');
        element.classList.add('invisible-menu-js');
      } else {
        navigationToggle.getElementsByTagName('use')[0].setAttribute("xlink:href", "#icon-menu-close");
        navigationToggle.getElementsByTagName('svg')[0].setAttribute("width", "20.514px");
        navigationToggle.getElementsByTagName('svg')[0].setAttribute("height", "20.512px");
        element.classList.remove('invisible-menu-js');
        element.classList.add('visible-menu-js');
      }
    })
  });
}
