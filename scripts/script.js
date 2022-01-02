window.addEventListener(
  "scroll",
  function (e) {
    let nav = document.querySelectorAll('[id^="nav_"]');
    for (let i = 0; i < nav.length; i++) {
      document.querySelector('a[href="#' + nav[i].id + '"]').className =
        1 >= nav[i].getBoundingClientRect().top - 50 &&
        nav[i].getBoundingClientRect().top >= 1 - nav[i].offsetHeight
          ? "active"
          : "";
    }
  },
  false
);
