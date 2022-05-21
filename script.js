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
