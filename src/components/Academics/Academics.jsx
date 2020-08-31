import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import { courses, resumeURL } from './Constants';
import Card from './Card';
import { FC } from './Constants'; 
import schoolIcon from '../../images/school.svg';
import './Academics.css'

const Academics = () =>{
    return (
        <div id='academics'>
            {/*Top school work section */}
            <Row>
                <Col sm={6}>
                    <div className='courseList'>
                        <h3 className='courseHeading'>Courses</h3>
                        {courses.map(
                            (course, index) => <li key={index} className="course">{course}</li>
                        )}
                    </div>
                </Col>
                <Col sm={6}>
                    <p className='info'>GPA: 3.8<br/></p>
                    <p className='info'><a href={resumeURL}>Link to Resume</a></p>
                </Col>
            </Row>

            {/* Clubs */}
            <Col xs={12}>
                <span className='heading'>Extracurriculars</span>
            </Col>
            <Card club={FC}/>
        </div>
    )
};

export default Academics;