import * as React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Card.css'

const Card = (props) => {
    const club = props.club;
    return (
        <Container className='mobile-card'>
            <Row>
                <Col xs={12}>
                    <div className='mobile-circle'>
                        <span className='mobile-name'>{club.name}</span>
                    </div>
                </Col>
                <Col xs={12}>
                    <div className='mobile-text'>
                        <Row className='mobile-headline'>
                            <span id='mobile-role'><i>{club.role}</i></span>
                            <span id='mobile-date'>{club.date}</span>
                        </Row>
                        <ul>
                            {club.details.map(detail => <li>{detail}</li>)}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Card;