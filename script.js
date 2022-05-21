// Declare initial variables
let container = document.querySelector(".container");
let songsContainer = container.querySelector(".songs-container");
let songs = songsContainer.querySelectorAll(".song");
let addButton = document.querySelector(".form__submit-btn_action_add");
let resetButton = document.querySelector(".form__submit-btn_action_reset");

// Disable 'Delete playlist' button if there are no songs
if (songs.length === 0) {
  resetButton.setAttribute("disabled", true);
  resetButton.classList.add("form__submit-btn_disabled");
} else {
  resetButton.removeAttribute("disabled", false);
  resetButton.classList.remove("form__submit-btn_disabled");
}

//Functions
function renderAdded() {
  let songs = songsContainer.querySelectorAll(".song");

  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.add("form__submit-btn_disabled");
  } else {
    resetButton.removeAttribute("disabled");
    resetButton.classList.remove("form__submit-btn_disabled");
  }
}

// Function to add a song to the playlist
function addSong() {
  songsContainer.innerHTML += `<div class="song">
    <h4 class="song__artist">The Cars</h4>
    <p class="song__title">Drive</p>
    <button class="song__like"></button>
  </div>`;
  // Add button on click listener
  addButton.addEventListener("click", addSong);
}
