import React from 'react';
import p5 from 'p5';
import Skills from './Skills';

class SkillsWrapper extends React.Component {
    componentDidMount() {
        this.canvas = new p5(Skills, "skillsSketch");
        //this.canvas = new window.p5(sketch, "app-p5_container");
        //the name in quotation marks corresponds to the div id
    }

    shouldComponentUpdate() { // just in case
        return false;
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        return(
            <div id="skillsSketch"/>
        );
    }
}

export default SkillsWrapper;