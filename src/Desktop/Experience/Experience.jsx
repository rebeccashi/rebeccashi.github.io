import * as React from 'react';
import BoxWrapper from './Box/BoxWrapper';
import { nyuIT, nyuGrader, calendar, cssa, cumulus, aveva } from './Constants';
import {Col} from 'react-bootstrap';
import './Experience.css';

class Experience extends React.Component{

    render() {

        return (
            <div className="exp">
                <Col sm={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>
                    <BoxWrapper object={aveva}/>
                    <BoxWrapper object={cumulus}/>
                    <BoxWrapper object={nyuGrader}/>
                    <BoxWrapper object={nyuIT}/>
                    <BoxWrapper object={calendar}/>
                    <BoxWrapper object={cssa}/>
                </Col>
            </div>
        )
    }
};

export default Experience;