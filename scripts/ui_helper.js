// Getting DOM Element
export const getDOMElement = (eleId) => {
  return document.getElementById(`${eleId}`);
};

// Setting DOM Element
export const setDOMElement = (eleID, type, data) => {
  const domElement = getDOMElement(eleID);
  switch (type) {
    case "innerHTML":
      domElement.innerHTML = data;
      break;
    case "value":
      domElement.value = data;
      break;
    default:
      console.error("Type not in [innnerHTML or value]");
      break;
  }
};

// Clearing DOM Element
export const clearDOMElement = (eleID) => {
  const domElement = getDOMElement(eleID);
  domElement.innerHTML = "";
};

// Input change event handler
export const inputChangeHandler = (eleID, customFunction) => {
  // Get element using element id
  const domElement = getDOMElement(eleID);

  // add event listener input for mapping continuos change
  domElement.addEventListener(
    "input",
    () => {
      console.log(`${eleID} - current value - ${domElement.value}`);
      customFunction(eleID, domElement.value);
    },
    false
  );
};

// DOM ELEMENT DISABLE TOGGLE
export const disableToggleDOM = (element) => {
  const domElement = getDOMElement(element);
  domElement.disabled = true;
};

export const enableToggleDOM = (element) => {
  const domElement = getDOMElement(element);
  domElement.disabled = false;
};

// Setting Slider UI
export const setSliderUI = (slideIDArray, size, speed) => {
  slideIDArray.forEach((sliderID) => {
    if (sliderID.includes("size")) setDOMElement(sliderID, "value", size);
    else if (sliderID.includes("speed"))
      setDOMElement(sliderID, "value", speed);
  });
};

// Delay function
export const waitforme = (milisec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
};

// Display array as bars
export const display = (eleID, array, size) => {
  // Clear element
  clearDOMElement(eleID);

  // Get element
  const bars = getDOMElement(eleID);

  // Set data according to array
  for (let i = 0; i < size; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
};
