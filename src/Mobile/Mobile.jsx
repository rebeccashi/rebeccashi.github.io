import * as React from 'react';
import TopBar from './TopBar/TopBar'
import {Container} from 'react-bootstrap';

class Mobile extends React.Component {
    render() {
        return (
            <Container fluid>
                <TopBar />
            </Container>
        )
    }
}

export default Mobile;