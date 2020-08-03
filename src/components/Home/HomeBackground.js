const HomeBackground = (p) => {

    let purple;

    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth/12*10, p.windowHeight);
        // purple = p.color('#B1AAFF');
        purple = p.color('#d3cfff');
        p.background(255);
        canvas.position(0,0);
        canvas.style('z-index', -1);
    }

    p.draw = () => {

    }
};

export default HomeBackground;