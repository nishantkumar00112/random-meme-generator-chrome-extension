document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const memeImage = document.getElementById("memeImage");
  
    generateButton.addEventListener("click", async function () {
      const response = await fetch("https://meme-api.com/gimme");
      const memeData = await response.json();
      memeImage.src = memeData.url;
    });
  });
  