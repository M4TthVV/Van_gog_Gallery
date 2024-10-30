let paintsData = []

fetch('paint.json')
  .then(response => response.json())
  .then(jsonData => {
    paintsData = jsonData
  }
  );


function closePopUp() {
    const popUp = document.getElementById("pop-up")
    popUp.classList.add("hidden")
}

function openPopUp(id) {
    const popUpContent = document.getElementById("pop-up-content")
    const popUp = document.getElementById("pop-up")
    const paintData = paintsData.filter(e => e.id === id)[0]

    popUpContent.innerHTML =
        `<h1>${paintData.name}</h1><p>${paintData.description}</p>`;

    popUp.classList.remove("hidden")
}


