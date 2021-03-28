import React from 'react';
import './BoxWrapper.css';
import p5 from 'p5';
import Box from './Box';
import calendar from '../../../images/calendar-snapshot.png';
import cssa from '../../../images/cssa.png'
import cumulus from '../../../images/cumulus.png'

class BoxWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        }
    }
    
    componentDidMount() {
        this.canvas = new p5(Box, "boxSketch");
        //the name in quotation marks corresponds to the div id
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        const { index, type, summary, date, details, img } = this.props.object;  
          
        return(
            <div id="boxSketch">
                <div id='type'>{type}</div>
                <h3 className='summary'>
                    <span id="name">{summary.name}</span>
                    { summary.company && <React.Fragment><br/><span id="company"> {summary.company}, </span></React.Fragment>}
                    { summary.location && <span>{summary.location}</span>}
                    <span className="tab"></span><span id="date">{date}</span>
                </h3>
                <ul>
                    {details.map(detail => <li>{detail}</li>)}
                </ul>
                {img && 
                    ( (img.alt==='calendar snapshot' &&
                        <a href={img.link} target="_blank" rel="noopener noreferrer">
                            <img src={calendar} className="snapshot" alt={img.alt} />
                        </a>)
                   || (img.alt === 'cssa snapshot' && 
                    <a href={img.link} target="_blank" rel="noopener noreferrer">
                                <img src={cssa} className="snapshot" alt={img.alt} />
                            </a>
                        )
                     || (img.alt === 'cumulus snapshot' && 
                    <a href={img.link} target="_blank" rel="noopener noreferrer">
                                <img src={cumulus} className="snapshot" alt={img.alt} />
                            </a>
                        )
                    )
                }
            </div>
        )
    }
}

export default BoxWrapper;