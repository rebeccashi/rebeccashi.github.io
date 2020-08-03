import React from 'react';
import './BoxWrapper.css';
import p5 from 'p5';
import Box from './Box';
import $ from 'jquery';
import calendar from '../../images/calendar-snapshot.png';
import cssa from '../../images/cssa.png'

class BoxWrapper extends React.Component {
    
    componentDidMount() {
        this.canvas = new p5(Box, "boxSketch");
        //the name in quotation marks corresponds to the div id
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        const { index, type, summary, date, details, img } = this.props.object;  
        const { parentWidth } = this.props;
        const height = $(window).height();
         
        let width, marginLeft, marginTop;
        if (parentWidth > 0) {
            if (parentWidth > 800) {    //3 boxes
                width = parentWidth/3 - 10;
                if (index % 3 === 1) {  //middle element
                    marginLeft = width + 10; 
                } else if (index % 3 === 2) {
                    marginLeft = 0;
                } else if (index % 3 === 0) {
                    marginLeft = width * 2 + 20;
                }
            } else if (parentWidth > 500) { //2 boxes
                width = parentWidth/2;
            } else {
                width = parentWidth;
            }
        }

        if (parentWidth > 800) {    //3 boxes
            if (index % 3 === 1) {
            } else if (index % 3 === 2) {
                marginTop = height / 4;
            } else if (index % 3 === 0) {
                marginTop = height / 3;
            }
        } else if (parentWidth > 500) { //2 boxes
        } else {
        }
            
        return(
            <div id="boxSketch" width={width} style={{width: width, marginLeft: marginLeft, marginTop: marginTop, marginRight: 10}}>
                <div id='type'>{type}</div>
                <h3 className='summary'>
                    <span id="name">{summary.name}</span>
                    { summary.company && <span id="company">, {summary.company}, </span>}
                    { summary.location && <span>{summary.location}</span>}
                    <span>     {date}</span>
                    {/* TO DO: insert more spaces*/}
                </h3>
                <ul>
                    {details.map(detail => <li>{detail}</li>)}
                </ul>
                {img && 
                    (img.alt==='calendar snapshot' &&
                        <a href={img.link} target="_blank" rel="noopener noreferrer">
                            <img src={calendar} className="snapshot" alt={img.alt} />
                        </a>
                   ||img.alt === 'cssa snapshot' && 
                    <a href={img.link} target="_blank" rel="noopener noreferrer">
                                <img src={cssa} className="snapshot" alt={img.alt} />
                            </a>
                    )
                }
            </div>
        )
    }
}

// const Box = (props) => {

//     const {type, summary, details} = props.object;
    
//     //consider list style

//     return (
//         <div className='outer'>
//             <div className='inner tall'>
//                     <div id='type'>{type}</div>
//                     <h3 className='summary'>
//                         <span>{summary.name}, </span>
//                         <span>{summary.company}, </span>
//                         <span>{summary.location}</span>
//                     </h3>
//                     <ul>
//                         {details.map(detail => <li>{detail}</li>)}
//                     </ul>
//             </div>
//             <div className='inner wide'>
//             </div>
//         </div>
//     );
// }

export default BoxWrapper;