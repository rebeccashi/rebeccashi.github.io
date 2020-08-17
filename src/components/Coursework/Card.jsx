import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import './Card.css'

const Card = () => {
    return (
        <Row className='card'>
            <Col sm={3}>
                <div className='circle'>Hello</div>
            </Col>
        </Row>
    )
}

export default Card;