let timers_buttons = document.querySelectorAll(".timers-buttons button");
let timer_input_minutes = document.getElementById("minutes");
let timer_input_seconds = document.getElementById("seconds");
let start_btn = document.getElementById("start_btn");
let stop_btn = document.getElementById("stop_btn");
let interval;

function remove_class() {
  timers_buttons.forEach((element) => {
    element.classList.remove("btn-active");
  });
}

function set_Timer(e) {
  remove_class();
  e.classList.add("btn-active");
  if (e.getAttribute("data-timer") == "custom") {
    timer_input_minutes.removeAttribute("disabled");
    timer_input_seconds.removeAttribute("disabled");
  } else {
    timer_input_minutes.setAttribute("disabled", "true");
    timer_input_seconds.setAttribute("disabled", "true");
  }

  switch (e.getAttribute("data-timer")) {
    case "Promodo":
      timer_input_minutes.value = "25";
      timer_input_seconds.value = "00";

      break;
    case "long":
      timer_input_minutes.value = "10";
      timer_input_seconds.value = "00";
      break;
    case "short":
      timer_input_minutes.value = "05";
      timer_input_seconds.value = "00";
      break;
    case "custom":
      timer_input_minutes.value = "00";
      timer_input_seconds.value = "00";
      break;
  }
  reset();
}

function max_length_input(e) {
  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, e.maxLength);
  }
}

function start_timer() {
   
  timers_buttons.forEach((element) => {
    if (element.classList.contains("btn-active")) {
      if (element.getAttribute("data-timer") == "custom") {
        if (timer_input_minutes.value == 0 && timer_input_seconds.value == 0) {
          alert("Please Enter Right Value To Start");
        } else if (
          timer_input_minutes.value < 0 ||
          timer_input_seconds.value < 0
        ) {
          alert(
            "Don't Enter Ngative Value or zero, Please Enter Right Value To Start"
          );
        } else {
          timer_input_minutes.setAttribute("disabled", "true");
          timer_input_seconds.setAttribute("disabled", "true");
          interval = setInterval(timer_initial, 1000);
        }
      }
      else{
        interval = setInterval(timer_initial, 1000);
      }
    }
  });
}

function stop_timer() {
    start_btn.removeAttribute("disabled");
  clearInterval(interval);
}

function timer_initial() {
    start_btn.setAttribute("disabled", "true");
  if (timer_input_seconds.value == 0) {
    timer_input_minutes.value--;
    timer_input_seconds.value = 60;
  }

  timer_input_seconds.value--;

  if (timer_input_minutes.value == 0 && timer_input_seconds.value == 0) {
    console.log("stop");
    start_btn.removeAttribute("disabled");
    clearInterval(interval);
    play_sound_three_times();
  }

  timer_input_minutes.value =
    timer_input_minutes.value.length < 2
      ? "0" + timer_input_minutes.value
      : timer_input_minutes.value;
  timer_input_seconds.value =
    timer_input_seconds.value < 10
      ? "0" + timer_input_seconds.value
      : timer_input_seconds.value;
}

function reset() {
  stop_timer();
  timers_buttons.forEach((element) => {
    if (element.classList.contains("btn-active")) {
      switch (element.getAttribute("data-timer")) {
        case "Promodo":
          timer_input_minutes.value = "25";
          timer_input_seconds.value = "00";
          break;
        case "long":
          timer_input_minutes.value = "10";
          timer_input_seconds.value = "00";
          break;
        case "short":
          timer_input_minutes.value = "05";
          timer_input_seconds.value = "00";
          break;
        case "custom":
          timer_input_minutes.value = "00";
          timer_input_seconds.value = "00";

          timer_input_minutes.removeAttribute("disabled");
          timer_input_seconds.removeAttribute("disabled");
          break;
      }
    }
  });
}

function play_sound_three_times() {
  let sound_inerval = setInterval(sound_play, 2000);
  setTimeout(() => {
    timers_buttons.forEach((element) => {
      if (element.classList.contains("btn-active")) {
        if (element.getAttribute("data-timer") == "custom") {
          timer_input_minutes.removeAttribute("disabled");
          timer_input_seconds.removeAttribute("disabled");
        }
      }
    });

    clearInterval(sound_inerval);
  }, 8000);
}

//

function sound_play() {
  let sound = new Audio("audio/sound.mp3");
  sound.play();
}
