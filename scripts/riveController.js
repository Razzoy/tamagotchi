let jump;

const riveInstance = new rive.Rive({

    src: "../assets/pinguin.riv",
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    stateMachines: 'controller',
    onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();

        let controller_inputs = riveInstance.stateMachineInputs('controller');
        console.log("Controller", controller_inputs);
        jump = controller_inputs.find((item) => item.name === 'jump');
    }
});

export {jump};