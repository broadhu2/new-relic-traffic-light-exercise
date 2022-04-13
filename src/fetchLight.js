import { COLORS } from "./constants";

const colors = Array.from(COLORS);

export default function fetchLight(color) {
  return new Promise((resolve, reject) => {
    if (!colors.includes(color)) {
      reject(`Invalid light color request: ${color}`);
    }

    resolve(color);
  });
}
