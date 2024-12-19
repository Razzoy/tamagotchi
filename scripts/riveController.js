let isAngry = false;
let isHappy = false;
let isEating;
let play;
let playFall;

let hp;

const riveInstance = new rive.Rive({

    src: "../assets/penguin.riv",
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    stateMachines: ['controller', 'healthBar', 'timeCicle'],
    onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();

        //Animal controls
        let controller_inputs = riveInstance.stateMachineInputs('controller');
        console.log("Controller", controller_inputs);
        isHappy = controller_inputs.find((item) => item.name === 'Happy');
        play = controller_inputs.find((item) => item.name === 'Play');
        isEating = controller_inputs.find((item) => item.name === 'Feed');

        isAngry = controller_inputs.find((item) => item.name === 'Angry');
        playFall = controller_inputs.find((item) => item.name === 'Play to death');

        //HealthBar
        let health_inputs = riveInstance.stateMachineInputs('healthBar');
        hp = health_inputs.find((item) => item.name === 'numHealth');

        //Day & Night Cicle
        let time_inputs = riveInstance.stateMachineInputs('timeCicle');
        console.log(time_inputs);
        
    }
});

export {isAngry, isHappy, hp, isEating, play, playFall};