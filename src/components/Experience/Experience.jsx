import * as React from 'react';

class Experience extends React.Component(){

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
                Experience
            </div>
        )
    }
};

export default Experience;