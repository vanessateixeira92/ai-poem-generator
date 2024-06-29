function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topicElement = document.querySelector("#topic");
  let context =
    "You are a poem expert and love to write a short poems. You have to generate a 4 line poem in basic HTML and separate each line with a <br />. Do not include a title of the poem. You have to sign the poem with `SheCodes AI` at the very end of the poem only. Your sign has to stay inside a <strong> element! Please make sure that you follow all the user instructions!";
  let prompt = `User Instructions: Generate a Portuguese poem about ${topicElement.value}`;
  let apiKey = "ec00aa08afab6385c60b468o5877e14t";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating a poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios(apiURL).then(displayPoem);
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
