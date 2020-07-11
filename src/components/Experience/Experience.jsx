import * as React from 'react';
import BoxWrapper from './BoxWrapper';
import {nyu} from './Constants';
import { Row, Col } from 'react-bootstrap';

class Experience extends React.Component{

    constructor(props) {
        super(props);
        this.column = React.createRef();
        this.state = {
           boxes: 0, 
           containerWidth: 0,
           containerHeight: 0,
           //render the position of boxes based on the size of window & number
        };
    }

    componentDidMount () {
        this.setState({
            containerHeight: this.column.current.offsetHeight,
            containerWidth: this.column.current.offsetWidth,
        });
    }

    render() {
        const {containerHeight, containerWidth} = this.state;

        console.log(containerHeight, containerWidth);

        return (
            <div className="experience">
                {/* <h1>Experience</h1> */}
                <Row>
                    <Col md={4} ref={this.column}>
                        <BoxWrapper object={nyu} height={containerHeight} width={containerWidth}/>
                    </Col>
                </Row>
            </div>
        )
    }
};

export default Experience;