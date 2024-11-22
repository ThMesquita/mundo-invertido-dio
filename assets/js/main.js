const music = document.querySelector("#music");
const switchThemeBody = document.querySelector("body");

function switchTheme() {
  switchThemeBody.classList.toggle("dark-theme");
  switchThemeBody.classList.toggle("light-theme");
  if (switchThemeBody.classList.contains("light-theme")) {
    music.src = `./assets/musics/normal-world.mp3`;
  } else {
    music.src = `./assets/musics/inverted-world.mp3`;
  }

  music.load();
}
