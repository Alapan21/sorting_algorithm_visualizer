import Application from "./application.js";

import {
  SIZE,
  SPEED,
  SLIDE_CONTROLLERS,
  START_BUTTON_ID,
  RESET_BUTTON_ID,
} from "./constant.js";

import {
  getDOMElement,
  setDOMElement,
  inputChangeHandler,
  display,
  setSliderUI,
  disableToggleDOM,
  waitforme,
  enableToggleDOM,
} from "./ui_helper.js";

import { randomNumber } from "./helper.js";

import { bubble } from "./sorting.js";
// // SCRIPT START
// SLIDE_CONTROLLERS.forEach((slider) => onChangeSlider(slider));
// //sliders.forEach((slider) => disableToggleSlider(slider));

// Run application
window.onload = runApp;

// Hoisted function
function runApp() {
  // Window loaded
  console.log(`Window loaded`);

  // Application data setters
  const setData = (id, value) => {
    if (id.includes("size")) app.size = value;
    else if (id.includes("speed")) app.speed = value;
    else {
      console.error("Error in application data type selection");
      return;
    }
    const { array, size } = app.getDetails();
    display("bars", array, size);
  };

  // Application instance created
  const app = new Application(SIZE, SPEED);
  console.log("App instance created");

  // Button DOM Element
  const startButton = getDOMElement(START_BUTTON_ID);
  const resetButton = getDOMElement(RESET_BUTTON_ID);

  // Reset button event handler
  resetButton.onclick = () => {
    setData("size", SIZE);
    setData("speed", SPEED);

    setSliderUI(SLIDE_CONTROLLERS, SIZE, SPEED);

    app.generate();
    console.log(app.getDetails());

    const { array, size } = app.getDetails();
    display("bars", array, size);
  };

  // Start button event handler
  startButton.onclick = async function () {
    SLIDE_CONTROLLERS.forEach((slider) => {
      disableToggleDOM(slider);
    });
    disableToggleDOM(START_BUTTON_ID);
    await bubble();
    SLIDE_CONTROLLERS.forEach((slider) => {
      enableToggleDOM(slider);
    });
    enableToggleDOM(START_BUTTON_ID);
  };

  // Displaying data
  const { array, size, speed } = app.getDetails();
  setSliderUI(SLIDE_CONTROLLERS, size, speed);
  display("bars", array, size);

  // sliders change handlers
  SLIDE_CONTROLLERS.forEach((slider) => {
    inputChangeHandler(slider, setData);
  });

  //
}
