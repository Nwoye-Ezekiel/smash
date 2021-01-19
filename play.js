var tile = document.getElementsByClassName("tile");
var score = 0;
var music_counter = 0;
var current;
var time;
var count = 0;
var temp = 0;
var diff = parseInt(localStorage.time, 10);

var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
  document.getElementById("iframeAudio").remove();
} else {
  document.getElementById("song").remove();
}

if (localStorage.difficulty_activated == "yes") {
  var diff = parseInt(localStorage.time, 10);
} else if (localStorage.difficulty_activated == undefined) {
  var diff = 2000;
  localStorage.difficulty = "Easy";
  localStorage.time = "2000";
}

if (localStorage.difficulty == "Easy") {
  document.getElementById("diff").innerHTML = localStorage.difficulty;
  document.getElementById("highscore").innerHTML =
    localStorage.scoreboard_score_easy;
} else if (localStorage.difficulty == "Medium") {
  document.getElementById("diff").innerHTML = localStorage.difficulty;
  document.getElementById("highscore").innerHTML =
    localStorage.scoreboard_score_medium;
} else if (localStorage.difficulty == "Hard") {
  document.getElementById("diff").innerHTML = localStorage.difficulty;
  document.getElementById("highscore").innerHTML =
    localStorage.scoreboard_score_hard;
}

function counter() {
  document.getElementById("counter-cont").style.display = "flex";
  document.getElementById("start-cont").style.display = "none";
  document.getElementById("gameover-cont").style.display = "none";
  setTimeout(() => {
    document.getElementById("counter-cont").style.display = "none";
    start();
  }, 3500);
}

function game_music() {
  document.getElementById("song").play();
}
function check(x) {
  if (music_counter > 1) {
    music_counter = 0;
  }
  if (x.style.backgroundColor == "white") {
    document.getElementsByClassName("music")[music_counter].play();
    x.style.cssText =
      "background-position:center;background-size:cover;background-color:#0B1B29;background-image:url(1.png)";
    document.getElementById("score").innerHTML = ++score;
    music_counter = music_counter + 1;
  } else {
    gameover();
    x.style.cssText = "background-color:red;animation:vanish 1s linear 0s 2";
  }
}
function gameover() {
  if (localStorage.difficulty == "Easy") {
    if (parseInt(localStorage.scoreboard_score_easy, 10) < score) {
      document.getElementById("new-highscore").style.display = "block";
      localStorage.scoreboard_score_easy = score;
    }
  } else if (localStorage.difficulty == "Medium") {
    if (parseInt(localStorage.scoreboard_score_medium, 10) < score) {
      document.getElementById("new-highscore").style.display = "block";
      localStorage.scoreboard_score_medium = score;
    }
  } else if (localStorage.difficulty == "Hard") {
    if (parseInt(localStorage.scoreboard_score_hard, 10) < score) {
      document.getElementById("new-highscore").style.display = "block";
      localStorage.scoreboard_score_hard = score;
    }
  }
  clearTimeout(timeout);
  for (var i = 0; i < tile.length; i++) {
    tile[i].setAttribute("onclick", "");
  }
  document.getElementById("score-display").innerHTML = score;
  setTimeout(() => {
    score *= 0;
    document.getElementById("gameover-cont").style.display = "flex";
  }, 2700);
}
function reset() {
  var c = Math.round(Math.random() * 15);
  current = c;
  for (var i = 0; i < tile.length; i++) {
    tile[i].style.backgroundImage = "none";
    tile[i].style.background = "#0B1B29";
    tile[i].setAttribute("onclick", "check(this)");
  }
  document.getElementsByClassName("tile")[c].style.background = "white";
}
function game() {
  var time = diff - score * 2;
  if (count > 0) {
    temp = 0;
    for (var i = 0; i < tile.length; i++) {
      if (tile[i].style.backgroundImage == "initial") {
        temp++;
      }
    }
    if (temp == 16) {
      tile[current].style.cssText =
        "background-color:yellow;animation:vanish 1s linear 0s 2";
      gameover();
      return false;
    }
  }
  reset();
  count++;
  timeout = setTimeout(game, time);
}
function start() {
  if (localStorage.difficulty == "Easy") {
    document.getElementById("highscore").innerHTML =
      localStorage.scoreboard_score_easy;
  } else if (localStorage.difficulty == "Medium") {
    document.getElementById("highscore").innerHTML =
      localStorage.scoreboard_score_medium;
  } else if (localStorage.difficulty == "Hard") {
    document.getElementById("highscore").innerHTML =
      localStorage.scoreboard_score_hard;
  }
  document.getElementById("new-highscore").style.display = "none";
  document.getElementById("score").innerHTML = 0;
  document.getElementById("gameover-cont").style.display = "none";
  document.getElementById("start-cont").style.display = "none";
  var timeout = setTimeout(game, time);
}
