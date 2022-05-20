// Declare initial variables
let container = document.querySelector(".container");
let songsContainer = container.querySelector(".songs-container");
let songs = songsContainer.querySelectorAll(".song");
let addButton = document.querySelector(".form__submit-btn_action_add");
let resetButton = document.querySelector(".form__submit-btn_action_reset");

// Disable 'Delete playlist' button if there are no songs
if (songs.length === 0) {
  setAttribute("disabled", true);
}
