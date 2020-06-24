function Skills(p) {
    let moss;
    let lightMoss;
    let lightGray;

    p.setup = function() {
        p.createCanvas(p.windowWidth * 0.75, p.windowHeight);
        // console.log(windowWidth*0.75 + ", " +windowHeight);
        p.background(255);
        moss = p.color(141,244,244);
        lightMoss = p.color(200,249,249);
        lightGray = p.color(201, 207, 207);
    }

    p.draw = function() {
        const moss = p.color(141,244,244);
        p.noStroke();
        p.fill(240);
        p.rect(485, 40, 475, 530);
    };

    // drawCircle(x, y, obj) {
    //     const unit = 25;
    //     p.fill(moss);
    //     p.ellipse(x, y, obj.value * unit);
    //     // fill(0);
    //     // fill(37, 40, 61);
    //     p.fill(54, 58, 59);		//dark blue
    //     p.textFont('Proxima Nova');
    //     // textFont('Montserrat');
    //     p.textAlign(CENTER, CENTER);
    //     if (obj.value == 5) {
    //         p.textSize(24);
    //     } else if (obj.value == 4) {
    //         p.textSize(18);
    //     } else if (obj.value == 3) {
    //         p.textSize(14);
    //     } else {
    //         p.textSize(12);
    //     }
    //     p.text(obj.skill, x, y);
    // };
};

export default Skills;