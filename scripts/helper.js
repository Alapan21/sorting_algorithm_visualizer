export const randomNumber = (min = 10, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function swap(elementOne, elementTwo) {
  let temp = elementOne.style.height;
  elementOne.style.height = elementTwo.style.height;
  elementTwo.style.height = temp;
}
