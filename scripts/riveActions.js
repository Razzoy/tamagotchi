import { jump } from "./riveController.js";

let jumpButton = document.getElementById('jumpButton');

const jumping = () => {
    jump.fire();
};

jumpButton.addEventListener("click", () => {
    jumping();
})