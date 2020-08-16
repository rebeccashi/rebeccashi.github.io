import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import { courses } from './Constants';
import './Coursework.css'

const Coursework = () =>{
    return (
        <div id='coursework'>
        {/*Top school work section */}
            <Row>
                <Col sm={6}>
                    <p className='courseHeading'>Courses</p>
                    <ul>
                        {courses.map(
                            (course, index) => <li key={index}>{course}</li>
                        )}
                    </ul>
                </Col>
                <Col sm={6}></Col>
            </Row>
            <Row>
                <Col sm={3}></Col>
            </Row>
        </div>
    )
};

export default Coursework;