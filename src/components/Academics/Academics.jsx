import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import { courses, resumeURL} from './Constants';
import Card from './Card';
import { FC } from './Constants'; 
import './Academics.css'

const Academics = () =>{
    return (
        <div id='academics'>
            {/*Top school work section */}
            <Row className='top'>
                <Col sm={12} md={6}>
                    <div>
                        <h3 className='courseHeading'>Courses</h3>
                        {courses.map(
                            (course, index) => <li key={index} className="course">{course}</li>
                        )}
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <p className='info'>Expected Graduation: Spring 2022</p>
                    <p className='info'>GPA: 3.8<br/></p>
                    <p className='info'><a href={resumeURL} id='resume' target="_blank" rel="noopener noreferrer">Link to Resume</a></p>
                </Col>
            </Row>

            {/* Clubs */}
            <Row>
                <Col xs={12}>
                    <span className='heading'>Extracurriculars</span>
                </Col>
            </Row>
            <Card club={FC}/>
        </div>
    )
};

export default Academics;