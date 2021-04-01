import * as React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Card.css'

const Card = (props) => {
    const club = props.club;
    return (
        <Container className='card'>
            <Row>
                <Col xs={2}>
                    <div className='circle'>
                        <span className='name'>{club.name}</span>
                    </div>
                </Col>
                <Col xs={10}>
                    <div className='text'>
                        <Row className='headline'>
                            <span id='role'><i>{club.role}</i></span>
                            <span id='date'>{club.date}</span>
                        </Row>
                        <ul>
                            {club.details.map((detail, index) => <li key={index}>{detail}</li>)}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Card;