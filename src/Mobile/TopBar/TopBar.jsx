import * as React from 'react';
import './TopBar.css';
import { Row, Col } from 'react-bootstrap';
import MenuIcon from '../../images/menu-icon.png'
  
class TopBar extends React.Component{

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.toggleTopbar();
    }

    toggleTopbar() {
        var topbar = document.querySelector("#topbar");
        if (this.props.menuOpen) {
            topbar.style.display = 'none';
        } else {
            topbar.style.display = 'block';
        }
    }

    render(){
        // this.toggleTopbar()
        return (
            <div id='topbar'>
                <Row>
                    <Col xs={9} className='initials'>
                        <h1>RS</h1>
                    </Col>
                    <Col xs={3} className='menuIcon'>
                        <img src={MenuIcon}/>
                    </Col>
                </Row>
            </div>
        )

    }
    
}

export default TopBar;

