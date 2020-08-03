const Box = (p) => {

    let width;

    p.setup = () => {
        width = p.width;
        let canvas = p.createCanvas(width, p.windowHeight);
        canvas.position(0,0);
        canvas.style('z-index', -1);
    }

    p.draw = () => {

    }
}

export default Box;