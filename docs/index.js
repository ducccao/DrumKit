let log = console.log;

function playing(audio, key) {
  // function: To play the sound when the key pressed
  // input: list audio, list key
  // output: animation and sound

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  // log(key);

  key.classList.add("active");
}

function removeTransition(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("active");
}

function main() {
  // function:
  // input:
  // output:

  // let s = document.createElement("audio");

  window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // when key down so playing
    playing(audio, keys);
  });

  // when it played then stop
  const keys = document.querySelectorAll(".key"); // nodelist so use like an array , htmlcollection isnt

  keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
  });
}

main();
