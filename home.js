function exit_alert() {
  document.getElementById("exit").style.display = "flex";
}
if (localStorage.name_activated == undefined) {
  localStorage.scoreboard_name = "Player";
}
if (localStorage.score_activated == undefined) {
  localStorage.scoreboard_score_easy = "0";
  localStorage.scoreboard_score_medium = "0";
  localStorage.scoreboard_score_hard = "0";
}
