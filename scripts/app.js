"use strict";

let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";

/* utils */

function loadData() {
  const habbitString = localStorage.getItem("HABBIT_KEY");
  const habbitArray = JSON.parse(habbitString);
  if (Array.isArray(habbitArray)) {
    habbits = habbitArray;
  }
}

function saveData() {
  const habbitString = JSON.stringify(habbits);
  localStorage.setItem(HABBIT_KEY, habbitString);
}

/* main code */
(() => {
  loadData();
  console.log(habbits);
})();
