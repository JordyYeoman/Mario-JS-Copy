import Keyboard from './KeyboardStates.js'

export function setupKeyboard(entity) {

    const input = new Keyboard();

    input.addMapping('Space', keyState => {
        if(keyState){
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
        console.log(keyState);
    });

    input.addMapping('ArrowRight', keyState => {
        entity.go.dir = keyState;
    });

    input.addMapping('ArrowLeft', keyState => {
        entity.go.dir = -keyState;
    });

    return input;
}