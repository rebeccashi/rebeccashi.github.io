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
        p.rectMode(p.CENTER);
        p.angleMode(p.DEGREES);
    }

    p.draw = () => {
        let textWidth = width * 10 / 12;
        // console.log(`window height: ${p.windowHeight}`)
        let textLeft = width/12;
        //marginTop is 10%
        let textTop = p.windowHeight * 0.18;
        let centerLeft = textLeft + textWidth/2;
        let centerTop = textTop + 350/2;
        //TODO: find a way to calculate textHeight
        p.noFill();
        p.strokeWeight(1)
        p.rect(centerLeft, centerTop, textWidth, 350)
        p.rotate(-10);
        p.translate(-90, 50)
        p.rect(centerLeft, centerTop, textWidth, 370)
        //do math to calculate rotated rect's width & height with regards to angle
    }
};

export default HomeBackground;