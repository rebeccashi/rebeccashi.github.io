const Box = (p) => {
    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0,0);
        canvas.style('z-index', -1);
    }

    p.draw = () => {

    }
}

export default Box;