import { cloud1, cloud2, cloud3 } from './Constants';

function Skills(p) {
    let moss, lightMoss;
    let scaleX, scaleY, width;
    
    p.setup = function() {
        p.createCanvas(p.windowWidth / 12 * 10, 710); //p.windowHeight * 1.1
        moss = p.color(141,244,244);
        lightMoss = p.color(200,249,249);
    }

    p.draw = function() {
        // WARNING: did not get the width props yet 
        width = p.windowWidth / 12 * 10;
        scaleX = width / 957;

        p.noStroke();
	
        const frontend = [
            {skill: "Javascript", value: 4},	//0
            {skill: "React", value: 5},			//1
            {skill: "Typescript", value: 3},	//2
            {skill: "HTML", value: 4},		    //3
            {skill: "CSS", value: 4},			//4
            {skill: "Node.js",value: 3},	    //5
        ];
	
        //front end circles
        p.fill(moss);
        p.drawCircle(765, 335, frontend[1]);	//React
        p.drawCircle(915, 290, frontend[3]);	//HTML
        p.drawCircle(680, 180, frontend[4]);	//CSS
        p.drawCircle(780, 215, frontend[5]);	//Node
        p.drawCircle(620, 405, frontend[0]);	//Javascript
        p.drawCircle(870, 425, frontend[2]);	//Typescript
        
        //cloud1
        p.stroke(20);
        p.strokeWeight(1);
        p.noFill();
        p.curveShape(cloud1);

        //cloud2
        const others = [
            {skill: "Java", value: 5},      //0
            {skill: "C", value: 3},         //1
            {skill: "Python", value: 3},    //2
            {skill: "git", value: 4},       //3
            {skill: "OpenSSL", value: 3}    //4
        ];

        p.curveShape(cloud2);

        //cloud 2 circles
        p.fill(moss);
        p.noStroke();
        p.drawCircle(170, 75, others[3])    //git
        p.drawCircle(385, 155, others[0])   //Java
        p.drawCircle(330, 270, others[1])   //C
        p.drawCircle(100, 160, others[2])   //Python
        p.drawCircle(250, 165, others[4])

        const art = [
            {skill: "Photoshop", value: 3},     //0
            {skill: "Web Design", value: 4},    //1
            {skill: "P5.js", value: 3},         //2
            {skill: "Digital Art", value: 5},   //3
        ]

        p.stroke(20);
        p.strokeWeight(1);
        p.noFill();
        p.curveShape(cloud3)

        p.noStroke();
        p.fill(moss);
        p.drawCircle(295, 420, art[1])      //Web Design
        p.drawCircle(415, 570, art[3])      //Digital Art
        p.drawCircle(250, 520, art[2])      //p5.js
        p.drawCircle(430, 450, art[0])      //Photoshop
    };

    /*cloud = curveShape + drawCircles 
        do i include the coordinates of circles in the array?
        The coordinates would change based on window size and also mobile view
        responsiveness: grid (columns), percentage
    */

    p.drawCircle = (x, y, obj) => {

        //make the cirlces go left and right 
        const unit = 25;
        // const unit = 23;
        p.fill(moss);
        // const random = Math.random(0,1) * 5; 
        // const variable = p.sin(p.frameCount/100)
        // p.ellipse(x + random, y + random, obj.value * unit);
        p.ellipse(x, y, obj.value * unit);
        // p.ellipse(x, y, (obj.value + variable) * unit);
        p.fill(54, 58, 59);		//dark blue
        p.textFont('Montserrat');
        p.textAlign(p.CENTER, p.CENTER);
        if (obj.value === 5) {
            if (obj.skill.length <= 5) {
                p.textSize(24);
            } else {
                p.textSize(20)
            }
        } else if (obj.value === 4) {
            if (obj.skill.length <= 5){
                p.textSize(20)
            } else {
                p.textSize(16);
            }
        } else if (obj.value === 3) {
            obj.skill.length <= 5 ?
                p.textSize(16)
            :
                p.textSize(13);
        } else {
            p.textSize(12);
        }
        p.text(obj.skill, x, y);
    };

    p.curveShape = (array) => {
        p.beginShape();
        for (let i = 0; i < array.length; i++) {
            p.curveVertex(array[i].x, array[i].y);
        }
        p.endShape(p.CLOSE);
    }
};

export default Skills;