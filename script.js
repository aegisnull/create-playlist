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

  /* define la variable noSongsElement.
    Esta debe contener el elemento con la clase .no-songs */
  let noSongsElement = container.querySelector(".no-songs");

  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.add("form__submit-btn_disabled");
    // elimina el estado oculto para cuando no hay canciones
    noSongsElement.classList.remove("no-songs_hidden");
  } else {
    resetButton.removeAttribute("disabled");
    resetButton.classList.remove("form__submit-btn_disabled");
    // oculta el elemento no-songs si la lista de reproducción tiene canciones
    noSongsElement.classList.add("no-songs_hidden");
  }
}

// Function to add a song to the playlist
function addSong() {
  let artist = document.querySelector(".input__text_type_artist");
  let song = document.querySelector(".input__text_type_song");

  songsContainer.insertAdjacentHTML(
    "beforeend",
    `
          <div class="song">
        <h4 class="song__artist">${artist.value}</h4>
        <p class="song__title">${song.value}</p>
            <button class="song__like"></button>
          </div>
    `
  );
  //Empty strings for the inpur values after adding a song
  artist.value = "";
  song.value = "";

  renderAdded();
}

addButton.addEventListener("click", addSong);

renderAdded();
