import React from 'react';
import p5 from 'p5';
import Skills from './Skills';
import './SkillsWrapper.css'

class SkillsWrapper extends React.Component {
    componentDidMount() {
        this.canvas = new p5(Skills, "skillsSketch");
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