import { waitforme } from "./ui_helper.js";

import { swap } from "./helper.js";

import { BASE_COLOR, COMPARISON_COLOR, COMPLETE_COLOR } from "./constant.js";

const delay = 50;

export async function bubble() {
  const BARS = document.querySelectorAll(".bar");
  //
  for (let i = 0; i < BARS.length - 1; i++) {
    for (let j = 0; j < BARS.length - i - 1; j++) {
      BARS[j].style.backgroundColor = COMPARISON_COLOR;
      BARS[j + 1].style.backgroundColor = COMPARISON_COLOR;
      if (parseInt(BARS[j].style.height) > parseInt(BARS[j + 1].style.height)) {
        await waitforme(delay);
        swap(BARS[j], BARS[j + 1]);
      }
      BARS[j].style.backgroundColor = BASE_COLOR;
      BARS[j + 1].style.backgroundColor = BASE_COLOR;
    }
    BARS[BARS.length - 1 - i].style.backgroundColor = COMPLETE_COLOR;
  }
  BARS[0].style.backgroundColor = COMPLETE_COLOR;
}
