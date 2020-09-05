import * as React from 'react';
import BoxWrapper from './Box/BoxWrapper';
import { nyu, calendar, cssa } from './Constants';
import {Col} from 'react-bootstrap';
import './Experience.css';

class Experience extends React.Component{

    render() {

        return (
            <div className="exp">
                <Col sm={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>
                    <BoxWrapper object={nyu}/>
                    <BoxWrapper object={calendar}/>
                    <BoxWrapper object={cssa}/>
                </Col>
            </div>
        )
    }
};

export default Experience;