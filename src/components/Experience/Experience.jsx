import * as React from 'react';
import BoxWrapper from './BoxWrapper';
import { nyu, calendar, cssa } from './Constants';
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
            containerWidth: this.container.current.offsetWidth,
        });
    }

    render() {
        const {containerWidth} = this.state;
        // TODO: Add a padding to the bottom or reconsider every section's padding

        return (
            <div className="exp">
                <Container fluid ref={this.container}>
                    <BoxWrapper object={nyu} parentWidth={containerWidth}/>
                    <BoxWrapper object={calendar} parentWidth={containerWidth}/>
                    <BoxWrapper object={cssa} parentWidth={containerWidth}/>
                </Container>   
            </div>
        )
    }
};

export default Experience;