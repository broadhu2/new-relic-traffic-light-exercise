import {
  COLORS,
  DEFAULT_COLOR,
  DEFAULT_MODE,
  GREEN,
  RED,
  SEQUENTIAL,
  YELLOW,
} from "./constants";

const colors = Array.from(COLORS);

// from https://github.com/Popmotion/popmotion
export function wrap(min, max, v) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// from https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
export function sentenceCase(string = "") {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

/**
 * Selects a random color.
 *
 * @param {string} activeColor the active color
 *
 * @returns {string} a random color from the available colors that is different from the active color
 */
export function randomColor(activeColor) {
  const choices = colors.filter((color) => color !== activeColor);
  return choices[getRandomInt(0, choices.length)];
}

/**
 * Determines the next color that should be requested from fetchLight method.
 *
 * @param {string} param.activeMode the active mode
 * @param {string} param.activeColor the active color
 * @param {Array} param.sequence the sequence to repeat when active mode is sequential
 * @param {boolean} param.resetSequence a flag that indicates whether to reset to the beginning of the sequence
 *
 * @returns {string} the next color request
 */
export function requestNextColor({
  activeMode = DEFAULT_MODE,
  activeColor = DEFAULT_COLOR,
  sequence = [GREEN, YELLOW, RED],
  resetSequence = false,
} = {}) {
  return activeMode === SEQUENTIAL
    ? sequence[
        wrap(
          0,
          sequence.length,
          resetSequence && activeColor !== GREEN
            ? 0
            : sequence.findIndex((color) => color === activeColor) + 1
        )
      ]
    : randomColor(activeColor);
}

export function getPrototypeString(x) {
  return Object.prototype.toString.call(x);
}

export function isObject(x) {
  return getPrototypeString(x) === "[object Object]";
}

export function isString(x) {
  return getPrototypeString(x) === "[object String]";
}

/**
 * Conditionally determines the classNames that should be appended to the class
 * attribute string for a component.
 *
 * @param  {...any} classNames a set of strings or objects whose keys will be
 *    converted to strings and added to the result if associated with a truthy value
 *
 * @returns {string} the computed class attribute string
 */
export function cx(...classNames) {
  return [
    ...classNames.reduce((result, c) => {
      if (isObject(c)) {
        for (const [k, v] of Object.entries(c)) {
          if (v) {
            result.add(`${k}`);
          }
        }
      } else if (isString(c)) {
        result.add(c);
      }
      return result;
    }, new Set()),
  ].join(" ");
}
