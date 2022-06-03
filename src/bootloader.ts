import { simpleApp } from "./app/SimpleApp";

function initialize() {
  return simpleApp();
}

window.addEventListener("load", initialize, { once: true });
// window.addEventListener(
//   "load",
//   () => {
//     const handler = initialize();
//     handler.dispose();
//   },
//   { once: true }
// );
