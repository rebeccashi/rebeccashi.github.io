import * as React from 'react';
import Box from './Box';
import {nyu, calendar} from './Constants';

class Experience extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           boxes: 0, 
           //render the position of boxes based on the size of window & number
        };
    }

    render() {
        return (
            <div className="experience">
                <h1>Experience</h1>
                <Box object={nyu}/>
            </div>
        )
    }
};

export default Experience;