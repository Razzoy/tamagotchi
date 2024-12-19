let play;
let hp;
let isAngry = false;
let isEating;

const riveInstance = new rive.Rive({

    src: "../assets/penguin.riv",
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    stateMachines: ['controller', 'healthBar'],
    onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();

        let controller_inputs = riveInstance.stateMachineInputs('controller');
        console.log("Controller", controller_inputs);
        play = controller_inputs.find((item) => item.name === 'Play');
        isEating = controller_inputs.find((item) => item.name === 'Feed');
        isAngry = controller_inputs.find((item) => item.name === 'Angry');

        let health_inputs = riveInstance.stateMachineInputs('healthBar');
        hp = health_inputs.find((item) => item.name === 'numHealth');
        console.log("This is", health_inputs);
        
    }
});

export {isAngry, hp, isEating, play};