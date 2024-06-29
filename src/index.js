function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating poem..",
    autoStart: true,
    cursor: null,
    delay: 8,
  });
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
