if (localStorage.difficulty == "Easy") {
  document.getElementById(localStorage.difficulty).checked = true;
} else if (localStorage.difficulty == "Medium") {
  document.getElementById(localStorage.difficulty).checked = true;
} else if (localStorage.difficulty == "Hard") {
  document.getElementById(localStorage.difficulty).checked = true;
}
$(window).load(function () {
  $(".se-pre-con").fadeOut("slow");
})
function difficulty(d) {
  if (d == "Easy") {
    localStorage.difficulty = "Easy";
    localStorage.time = "2000";
  } else if (d == "Medium") {
    localStorage.difficulty = "Medium";
    localStorage.time = "1500";
  } else if (d == "Hard") {
    localStorage.difficulty = "Hard";
    localStorage.time = "1000";
  }
}
