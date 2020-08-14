import { cloud1 } from './Constants';

function Skills(p) {
    let moss, lightMoss, lightGray;
    let scaleX, scaleY, width;
    
    p.setup = function() {
        p.createCanvas(p.windowWidth / 12 * 10, p.windowHeight);
        moss = p.color(141,244,244);
        lightMoss = p.color(200,249,249);
        lightGray = p.color(201, 207, 207);
        // p.background(lightGray);
        // p.frameRate(40)
    }

    p.draw = function() {
        // WARNING: did not get the width props yet 
        width = p.windowWidth / 12 * 10;
        scaleX = width / 957;
        // console.log(width)

        p.noStroke();
	
        const frontend = [
            {skill: "Javascript", value: 4},	//0
            {skill: "React", value: 5},				//1
            {skill: "Typescript", value: 3},	//2
            {skill: "HTML", value: 4},				//3
            {skill: "CSS", value: 4},					//4
            {skill: "Node.js",value: 2},			//5
        ];
	
        //front end circles
        // p.clear()
        p.fill(moss);
        //Make 
        p.drawCircle(760, 320, frontend[1]);	//React
        p.drawCircle(905, 300, frontend[3]);	//HTML
        p.drawCircle(670, 190, frontend[4]);	//CSS
        p.drawCircle(770, 210, frontend[5]);	//Node
        p.drawCircle(610, 420, frontend[0]);	//Javascript
        p.drawCircle(860, 430, frontend[2]);	//Typescript
        
        //cloud1
        p.stroke(20);
        p.strokeWeight(1);
        p.noFill();
        p.curveShape(cloud1);

        
        const others = [
            {skill: "Java", value: 5},
            {skill: "C", value: 3},
            {skill: "Python", value: 3},
            {skill: "git", value: 4},
            {skill: "OpenSSL", value: 3}
        ];

        const cloud2 = [
            {x: 15, y: 160},    //left most
            {x: 28, y: 120},
            {x: 50, y: 100},
            {x: 80, y: 40}, 
            {x: 160, y: 5},    //peak
            {x: 223, y: 45},
            {x: 275, y: 70},
            {x: 370, y: 55},     //smaller peak
            {x: 440, y: 105},
            {x: 500, y: 135},
            {x: 530, y: 190},   //right
            {x: 505, y: 230},
            {x: 450, y: 250},
            {x: 350, y: 335},   //bottom right
            {x: 260, y: 315},
            {x: 185, y: 265},
            {x: 75, y: 270},    //bottom left
            {x: 25, y: 210},
        ]
        p.curveShape(cloud2);

        const art = [
            {skill: "Photoshop", value: 3},
            {skill: "Web Design", value: 4},
            {skill: "P5.js", value: 3},
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
        // const random = Math.random(0,1) * 5; 
        // const variable = p.sin(p.frameCount/100)
        // p.ellipse(x + random, y + random, obj.value * unit);
        p.ellipse(x, y, obj.value * unit);
        // p.ellipse(x, y, (obj.value + variable) * unit);
        p.fill(54, 58, 59);		//dark blue
        p.textFont('Montserrat');
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