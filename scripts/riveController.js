let jump;

const riveInstance = new rive.Rive({

    src: "../assets/penguin.riv",
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    stateMachines: 'controller',
    onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();

        let controller_inputs = riveInstance.stateMachineInputs('controller');
        console.log("Controller", controller_inputs);
        play = controller_inputs.find((item) => item.name === 'play');
    }
});

export {play};