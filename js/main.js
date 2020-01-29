/* DETECT LANGUAGE */
var userLang = navigator.language || navigator.userLanguage;

var setLine = document.querySelectorAll(".language");

setLine[0].addEventListener("click", function() {
  sessionStorage.setItem("userLanguage", "it");
});

setLine[1].addEventListener("click", function() {
  sessionStorage.setItem("userLanguage", "en");
});

/* HIGHLIght LANGUAGE */
if ("userLanguage" in sessionStorage) {
  if (sessionStorage.getItem("userLanguage") == "it") {
    setLine[0].classList.add("highlight");
  } else {
    setLine[1].classList.add("highlight");
  }
} else {
  if (userLang == "it") {
    setLine[0].classList.add("highlight");
  } else {
    setLine[1].classList.add("highlight");
  }
}

/* if (userLang == "it") {
  console.log(setLine[0]);
} else {
  console.log(setLine[1]);
} */
