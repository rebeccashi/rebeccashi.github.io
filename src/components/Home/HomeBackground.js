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
        p.frameRate(40)
    }

    p.windowResized = () => {
        if (p.windowWidth < 576) {
            width = p.windowWidth / 12 * 9;
        } else {
            width = p.windowWidth / 12 * 10;
        }
        p.resizeCanvas(width, p.windowHeight);
    }

    p.draw = () => {
        //bootstrap md breakpoint
        if (p.windowWidth < 768) {
            p.clear();
        } else {
            let textWidth = width * 10 / 12;
            let textLeft = width/12;
            //marginTop is 10%
            let textTop = p.windowHeight * 0.2;
            let centerLeft = textLeft + textWidth/2;
            let centerTop = textTop + 350/2;
            //TODO: find a way to calculate textHeight
            p.noFill();
            p.strokeWeight(1)
            p.clear()
            // let variable = Math.abs(p.cos(p.frameCount/3));
            const variable = -Math.abs(p.sin(p.frameCount/2))
            console.log(`variable ${variable}`);
            let v = p.frameCount % 100 / 100
            console.log(`v ${v}`)
            p.rect(textLeft + textWidth/2, textTop + 180, textWidth, 360)

            // p.translate(-90, 50)
            p.translate(-50, 20)
            // p.rotate(-11 * Math.abs(p.cos(p.frameCount/3)));
            p.rotate(-3 + 4.7 * variable)
            p.rect(textLeft + textWidth/2, textTop + 375/2, textWidth + 10, 375 + 10)

            //REFACTOR: does the rotate change if I make this in a separate function
            p.push()
            p.rotate(-15 * variable);
            p.translate(45, -52)
            p.rect(textLeft + textWidth/2, textTop + 365/2, textWidth + 10, 365)
            p.pop()

        }    

    }
};

export default HomeBackground;