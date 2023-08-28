(function () {
  const sliders = document.querySelectorAll(".slider[data-slider='on']");
  sliders.forEach((slider) => {
    let images = slider.querySelectorAll("img");
    let dots = [];

    let dotContainer = document.createElement("div");
    dotContainer.className = "slider-dot-container";

    images.forEach((image, index) => {
      image.setAttribute("data-index", index);
      let dot = document.createElement("span");
      dot.className = "slider-dot active";
      dot.setAttribute("data-index", index);
      dot.onclick = function (e) {
        dots.forEach((dot) => {
          dot.classList.remove("active");
        });
        dot.classList.add("active");
        let id = dot.getAttribute("data-index");
        images.forEach((image) => {
          image.style.display = "none";
          if (image.getAttribute("data-index") === id) {
            image.style.display = "block";
          }
        });
      };
      if (index !== 0) {
        image.style.display = "none";
        dot.classList.remove("active");
      }
      dots.push(dot);
    });

    dots.forEach((dot) => {
      dotContainer.append(dot);
    });

    slider.append(dotContainer);
  });
})();
