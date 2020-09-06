const Box = (p) => {

    let width;
    let props;

    p.setup = () => {
        width = p.width;
        let canvas = p.createCanvas(width, p.windowHeight);
        canvas.position(0,0);
        canvas.style('z-index', -1);
    }

    p.draw = () => {

    }

    p.pushProps = function (_props) {
        props = _props;
        console.log(props)
        p.loop();
      }
}

export default Box;