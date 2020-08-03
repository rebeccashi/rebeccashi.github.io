import { cloud1 } from './Constants';

function Skills(p) {
    let moss, lightMoss, lightGray;
    let scaleX, scaleY, width;
    
    p.setup = function() {
        p.createCanvas(p.windowWidth / 12 * 10, p.windowHeight);
        // p.background(255);
        moss = p.color(141,244,244);
        lightMoss = p.color(200,249,249);
        lightGray = p.color(201, 207, 207);

    }

    p.draw = function() {
        // WARNING: did not get the width props yet 
        width = p.width;
        scaleX = width / 957;
        // console.log(width)

        p.noStroke();
        // p.fill(240);
        // p.rect(485, 40, 475, 530);
	
        const frontend = [
            {skill: "Javascript", value: 4},	//0
            {skill: "React", value: 5},				//1
            {skill: "Typescript", value: 3},	//2
            {skill: "HTML", value: 4},				//3
            {skill: "CSS", value: 4},					//4
            {skill: "Node.js",value: 2},			//5
        ];
	
        //front end circles
        p.fill(moss);
        p.drawCircle(730, 320, frontend[1]);	//React
        p.drawCircle(875, 300, frontend[3]);	//HTML
        p.drawCircle(640, 190, frontend[4]);	//CSS
        p.drawCircle(740, 210, frontend[5]);	//Node
        p.drawCircle(580, 420, frontend[0]);	//Javascript
        p.drawCircle(830, 430, frontend[2]);	//Typescript
        
        //cloud
        // stroke(lightMoss);
        // strokeWeight(4);
        p.stroke(20);
        p.strokeWeight(1);
        p.noFill();
        p.curveShape(cloud1);
        
        const others = [
            {skill: "Java", value: 5},
            {skill: "C", value: 3},
            {skill: "git", value: 4},
            {skill: "OpenSSL", value: 3}
        ];

        const art = [
            {skill: "Photoshop", value: 3},
            {skill: "Web Design", value: 4},
            {skill: "Open Processing", value: 3},
            {skill: "Digital Art", value: 5},
        ]
    };

    /*cloud = curveShape + drawCircles 
        do i include the coordinates of circles in the array?
        The coordinates would change based on window size and also mobile view
        responsiveness: grid (columns), percentage
    */

    p.drawCircle = (x, y, obj) => {

        //make the cirlces go left and right 
        const unit = 25;
        p.fill(moss);
        p.ellipse(x, y, obj.value * unit);
        // fill(0);
        // fill(37, 40, 61);
        p.fill(54, 58, 59);		//dark blue
        p.textFont('Montserrat');
        // p.textFont('Proxima Nova');
        // p.textFont('Noto Sans JP');
        // p.textFont('Lora');
        p.textAlign(p.CENTER, p.CENTER);
        if (obj.value === 5) {
            p.textSize(24);
        } else if (obj.value === 4) {
            p.textSize(18);
        } else if (obj.value === 3) {
            p.textSize(14);
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