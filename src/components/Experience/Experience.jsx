import * as React from 'react';
import BoxWrapper from './BoxWrapper';
import { nyu, calendar} from './Constants';
import { Container, Row, Col } from 'react-bootstrap';

class Experience extends React.Component{

    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.state = {
           boxes: 0, 
           containerWidth: 0,
           containerHeight: 0,
           //render the position of boxes based on the size of window & number
        };
    }

    componentDidMount () {
        this.container.current && this.setState({
            containerHeight: this.container.current.offsetHeight,
            containerWidth: this.container.current.offsetWidth,
        });
    }

    render() {
        const {containerHeight, containerWidth} = this.state;

        console.log(`Container component width ${this.state.containerWidth}, height ${this.state.containerHeight}`);

        return (
            <div className="exp">
                <Container fluid ref={this.container}>
                    <BoxWrapper object={nyu} parentHeight={containerHeight} parentWidth={containerWidth}/>
                    <BoxWrapper object={calendar} parentHeight={containerHeight} parentWidth={containerWidth}/>
                </Container>   
            </div>
        )
    }
};

export default Experience;