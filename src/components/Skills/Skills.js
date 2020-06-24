function Skills(p) {
    
    p.setup = function() {
        p.createCanvas(p.windowWidth * 0.75, p.windowHeight);
        // console.log(windowWidth*0.75 + ", " +windowHeight);
        p.background(255);
    }

    p.draw = function() {
        const moss = p.color(141,244,244);
        p.noStroke();
        p.fill(240);
        p.rect(485, 40, 475, 530);
    }
};

export default Skills;