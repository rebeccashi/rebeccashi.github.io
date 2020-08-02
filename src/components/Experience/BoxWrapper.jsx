import React from 'react';
import './BoxWrapper.css';
import p5 from 'p5';
import Box from './Box';
import $ from 'jquery';

class BoxWrapper extends React.Component {
    
    componentDidMount() {
        this.canvas = new p5(Box, "boxSketch");
        //the name in quotation marks corresponds to the div id
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        const {type, summary, details, index} = this.props.object;  
        const {parentHeight, parentWidth} = this.props;
        console.log('window height ', $(window).height());
        const height = $(window).height();
        //for position absolute, width is accurate but height is 0.
         
        let width, marginLeft, marginTop, top;
        if (parentWidth > 0) {
            if (parentWidth > 800) {    //3 boxes
                width = parentWidth/3;
                if (index % 3 === 1) {
                    marginLeft = width; 
                } else if (index % 3 === 2) {
                    marginLeft = 0;
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
                top = 100;
            }
        } else if (parentWidth > 500) { //2 boxes
        } else {
        }
            
        console.log('marginTop ', marginTop)
        console.log('top ', top)

        //fix summary style

        return(
            <div id="boxSketch" style={{width: width, marginLeft: marginLeft, marginTop: marginTop, marginRight: 10}}>
                <div id='type'>{type}</div>
                     <h3 className='summary'>
                         <span id="name">{summary.name}</span>
                        { summary.company && <span id="company">, {summary.company}, </span>}
                        { summary.location && <span>{summary.location}</span>}
                     </h3>
                     <ul>
                         {details.map(detail => <li>{detail}</li>)}
                     </ul>
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