const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(function () {
  let digitInputs = $$("input[type='number'][data-digit-only]");
  digitInputs.forEach((digitInput) => {
    let id = digitInput.id;
    let value = Number(digitInput.value) || 1;
    digitInput.addEventListener("input", (e) => {
      if (Number.isNaN(Number(e.data))) {
        e.target.value = value;
      } else if (Number(e.target.value) === 0) {
        e.target.value = 0;
        value = 0;
      } else {
        e.target.value = Number(e.target.value);
        value = Number(e.target.value);
      }
    });

    const minusButton = $(`button[data-minus-for='${id}']`);
    if (minusButton) {
      minusButton.addEventListener("click", () => {
        value -= 1;
        if (value < 0) value = 0;
        digitInput.value = value;
      });
    }

    const plusButton = $(`button[data-plus-for='${id}']`);
    if (plusButton) {
      plusButton.addEventListener("click", () => {
        value += 1;
        digitInput.value = value;
      });
    }
  });
})();

(function () {
  let closeNotificationButton = $(".close-button");
  closeNotificationButton.addEventListener("click", () => {
    $(".notification").style.display = "none";
  });
})();

(function () {
  $(".menu-nav-button").addEventListener("click", () => {
    $(".navbar-mobile").style.display = "flex";
  });

  $(".close-navbar-mobile").addEventListener("click", () => {
    $(".navbar-mobile").style.display = "none";
  });
})();
