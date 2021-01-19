document.getElementById("scoreboard_name").innerHTML =
  localStorage.scoreboard_name;
if (localStorage.difficulty == "Easy") {
  document.getElementById("scoreboard_score").innerHTML =
    localStorage.scoreboard_score_easy;
} else if (localStorage.difficulty == "Medium") {
  document.getElementById("scoreboard_score").innerHTML =
    localStorage.scoreboard_score_medium;
} else if (localStorage.difficulty == "Hard") {
  document.getElementById("scoreboard_score").innerHTML =
    localStorage.scoreboard_score_hard;
}

function display_difficulty(x) {
  if (x.id == "select_easy") {
    document.getElementById("scoreboard_score").innerHTML =
      localStorage.scoreboard_score_easy;
    x.style.cssText =
      "background-color:rgba(255, 0, 0, 0.726);border-bottom: #ffffff solid;";
      document.getElementById("select_medium").style.cssText =
    "background-color:none;border-bottom:none;";
    document.getElementById("select_hard").style.cssText =
      "background-color:none;border-bottom:none;";
  } else if (x.id == "select_medium") {
    document.getElementById("scoreboard_score").innerHTML =
      localStorage.scoreboard_score_medium;
    x.style.cssText =
      "background-color:rgba(255, 0, 0, 0.726);border-bottom: #ffffff solid;";
      document.getElementById("select_easy").style.cssText =
        "background-color:none;border-bottom:none;";
      document.getElementById("select_hard").style.cssText =
        "background-color:none;border-bottom:none;";
  } else if (x.id == "select_hard") {
    document.getElementById("scoreboard_score").innerHTML =
      localStorage.scoreboard_score_hard;
    x.style.cssText =
      "background-color:rgba(255, 0, 0, 0.726);border-bottom: #ffffff solid;";
      document.getElementById("select_easy").style.cssText =
        "background-color:none;border-bottom:none;";
      document.getElementById("select_medium").style.cssText =
        "background-color:none;border-bottom:none;";
  }
}

if (localStorage.difficulty == "Easy") {
  document.getElementById("select_easy").style.cssText =
    "background-color:rgba(255, 0, 0, 0.726);border-bottom: #ffffff solid;";
} else if (localStorage.difficulty == "Medium") {
  document.getElementById("select_medium").style.cssText =
    "background-color:rgba(255, 0, 0, 0.726);border-bottom: #ffffff solid;";
} else if (localStorage.difficulty == "Hard") {
  document.getElementById("select_hard").style.cssText =
    "background-color:rgba(255, 0, 0, 0.726);border-bottom: #ffffff solid;";
}

