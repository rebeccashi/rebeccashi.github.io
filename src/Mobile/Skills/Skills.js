import {frontend, others, art} from '../../Shared/Skills/Constants'

function Skills(p) {
    let moss;
    let combined, drawn = []

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight)
        moss = p.color(141,244,244);

        combined = frontend.concat(others).concat(art)
        console.log(combined)

        for (let i = 0; i < combined.length; i++) {
            const unit = 25;
            const element = combined[i];
            let x, y;
            const r = element.value * unit
            
            do {
                x = p.random(p.windowWidth)
                y = p.random(p.windowHeight)
            } while (!checkCircle(x, y, r, drawn));
            
            p.ellipse(x, y, r)
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
            const existingCircle = drawn[i];
            const xOverlap = (x + r <= existingCircle.x - existingCircle.r) || (x - r <= existingCircle.x + existingCircle.r)
            const yOverlap = (y + r <= existingCircle.y - existingCircle.r) || (y - r <= existingCircle.y + existingCircle.r)
            const overlap = xOverlap && yOverlap
            if (overlap) {
                console.log('circle invalid')
                return false
            }
        }
        console.log('circle valid')
        return true
    }


}
export default Skills;