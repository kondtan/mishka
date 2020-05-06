var promo__order = document.querySelector(".promo__order");
var popup__order = document.querySelector(".modal-order");
var catalog__order = document.querySelectorAll(".catalog-item__button");

if (promo__order) {
  promo__order.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup__order.classList.add("modal--show");
  });

  //слушаем ESC
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup__order.classList.contains("modal--show")) {
        evt.preventDefault();
        popup__order.classList.remove("modal--show");
      }
    }
  });
}

if (catalog__order) {
  catalog__order.forEach(function(element) {
    element.addEventListener("click",
    function (evt) {
      evt.preventDefault();
      popup__order.classList.add("modal--show");
    });

  //слушаем ESC
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (popup__order.classList.contains("modal--show")) {
          evt.preventDefault();
          popup__order.classList.remove("modal--show");
        }
      }
    });
  })
}

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
