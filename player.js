if (localStorage.name_activated == undefined) {
  localStorage.player_name = "Your Name";
}
document.getElementById("user").value = localStorage.player_name;
function set_name(x) {
  localStorage.player_name = x.value;
  localStorage.scoreboard_name = x.value;
}
