const HomeBackground = (p) => {

    let purple;
    let width;

    p.setup = () => {
        //bootstrap sm breakpoint is 576px
        if (p.windowWidth < 576) {
            width = p.windowWidth / 12 * 9;
        } else {
            width = p.windowWidth / 12 * 10;
        }

        let canvas = p.createCanvas(width, p.windowHeight);
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