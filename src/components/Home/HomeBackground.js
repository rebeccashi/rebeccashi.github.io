const HomeBackground = (p) => {

    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth * 0.75, p.windowHeight);
        p.background(255);
        canvas.position(0,0);
        canvas.style('z-index', -1);
    }

    p.draw = () => {

    }
};

export default HomeBackground;