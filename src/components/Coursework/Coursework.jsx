import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import { courses } from './Constants';
import Card from './Card';
import { FC } from './Constants'; 
import './Coursework.css'

const Coursework = () =>{
    return (
        <div id='coursework'>
            {/*Top school work section */}
            <Row>
                <Col sm={6}>
                    <h2 className='courseHeading'>Courses</h2>
                    <ul>
                        {courses.map(
                            (course, index) => <li key={index}>{course}</li>
                        )}
                    </ul>
                </Col>
                <Col sm={6}></Col>
            </Row>

            {/* Clubs */}
            <Col xs={12}>
                    <h2 className='heading'>Clubs</h2>
                </Col>
            <Card club={FC}/>
        </div>
    )
};

export default Coursework;