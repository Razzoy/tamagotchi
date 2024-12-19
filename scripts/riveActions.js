import { play, isEating } from "./riveController.js";
import { socket } from "./socket/socketController.js";

let playButton = document.getElementById('playButton');
let feedButton = document.getElementById('feedButton');

const jumping = () => {
    play.fire();
    socket.emit('play', {});
};

const feeding = () => {
    isEating.fire();
    socket.emit('feed', {feed: "Client feeds"})
}

playButton.addEventListener("click", () => {
    jumping();
})

feedButton.addEventListener('click', () => {
    feeding();
})