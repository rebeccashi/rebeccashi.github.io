import {frontend, others, art} from '../../Shared/Skills/Constants'

// https://www.openprocessing.org/sketch/1076992#code

function Skills(p) {
    let moss;
    let combined, drawn = []

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight * 1.5)
        moss = p.color(141,244,244);
        // p.background(100);

        combined = frontend.concat(others).concat(art)

        for (let i = 0; i < combined.length; i++) {
            p.fill(moss)
            p.noStroke();
            const unit = 20;
            const element = combined[i];
            let x, y;
            const d = element.value * unit  //diameter
            const r = d/2   //radius

            // x = p.random(p.windowWidth)
            // y = p.random(p.windowHeight)
            // console.log(`skill: ${element.skill}, x: ${x}, y: ${y}, r: ${r}`)
            
            do {
                x = p.random(p.windowWidth)
                y = p.random(p.windowHeight)
            } while (!checkCircle(x, y, r, drawn));
            
            // console.log(`skill: ${element.skill}, x: ${p.round(x)}, y: ${p.round(y)}, r: $p.{round(r)}`)   
            p.ellipse(x, y, d)
            
            //text
            p.fill(54, 58, 59);		//dark blue
            p.textFont('Montserrat');
            p.textAlign(p.CENTER, p.CENTER);
            p.text(element.skill, x, y)

            const newCircle = {
                x,
                y,
                r,
            };
            drawn.push(newCircle)
        }
    }

    function checkCircle(x, y, r, drawn){
        for (let i = 0; i < drawn.length; i++) {
            if (x + r > p.windowWidth || x - r < 0) {
                return false
            }
            
            const existingCircle = drawn[i];
            const xOverlap = (x + r >= existingCircle.x - existingCircle.r && x + r < existingCircle.x + existingCircle.r)
            || (x - r <= existingCircle.x + existingCircle.r && x - r > existingCircle.x - existingCircle.r)
            || (x >= existingCircle.x - existingCircle.r && x < existingCircle.x + existingCircle.r);
            
            const yOverlap = (y + r >= existingCircle.y - existingCircle.r && y + r < existingCircle.y + existingCircle.r) 
            || (y - r <= existingCircle.y + existingCircle.r && y - r > existingCircle.y - existingCircle.r)
            || (y >= existingCircle.y - existingCircle.r && y < existingCircle.y + existingCircle.r);
            
            const overlap = xOverlap && yOverlap
            if (overlap) {
                // console.log('invalid circle')
                // console.log(`x overlap: ${xOverlap}`)
                // console.log(`y overlap: ${yOverlap}`)
                // console.log(`new: x: ${round(x)}, y: ${round(y)}, r: ${round(r)}`)
                // console.log(`existing: x: ${round(existingCircle.x)}, y: ${round(existingCircle.y)}, r: ${round(existingCircle.r)}`)
                return false
            }
        }
        // console.log('circle valid')
        return true
    }


}
export default Skills;