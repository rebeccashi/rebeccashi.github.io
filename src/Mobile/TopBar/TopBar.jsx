import * as React from 'react';
import './TopBar.css';
  
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
                <div></div>
                <h1 className='initials'>RS</h1>
            </div>
        )

    }
    
}

export default TopBar;

