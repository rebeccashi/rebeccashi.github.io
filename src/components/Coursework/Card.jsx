import * as React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Card.css'

const Card = (props) => {
    const club = props.club;
    return (
        <Container className='card'>
            <Row>
                <Col xs={3}>
                    <div className='circle'>
                        <span className='name'>{club.name}</span>
                    </div>
                </Col>
                <Col xs={9}>
                    <div className='text'>
                        <span className='date'>{club.date}</span>
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