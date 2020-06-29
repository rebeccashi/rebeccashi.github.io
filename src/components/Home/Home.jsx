import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'antd';

class Home extends React.Component {

    render() {
        return (
            <Row>
                <p>Hi there! I am Xiaoyi Shi and I go by Rebecca. 
                I am a rising junior at New York University studying Computer Science. 
                I am currently working for a nonprofit organization as a front-end web developer. 
                My career goal is to become a software engineer. In addition to computer science, 
                I am also interested in art and design, including UI/UX. </p>
            </Row>
            
        )
    }
}

export default withRouter(Home);