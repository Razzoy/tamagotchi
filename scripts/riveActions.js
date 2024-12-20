import { play, isEating, playFall, hp } from "./riveController.js";
import { socket } from "./socket/socketController.js";

let playButton = document.getElementById('playButton');
let feedButton = document.getElementById('feedButton');

const disableButtonTemporarily = (button, timeout) => {
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
    }, timeout);
};

const jumpFail = () => {
        playFall.fire();
        socket.emit('play fail', {});
        disableButtonTemporarily(playButton, 2000);
};


const jumping = () => {
    socket.emit("check-hp", {}, (response) => {
        hp.value = response.health;
        if (response.health <= 0) {
            jumpFail();
        } else {
            play.fire();
            socket.emit('play', {});
            disableButtonTemporarily(playButton, 2000);
        }
    });
};

const feeding = () => {
    isEating.fire();
    socket.emit('feed', { feed: "Client feeds" })
    disableButtonTemporarily(feedButton, 1000);
}

playButton.addEventListener("click", () => {
    jumping();
})

feedButton.addEventListener('click', () => {
    feeding();
})