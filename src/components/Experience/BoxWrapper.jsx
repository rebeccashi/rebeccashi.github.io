import React from 'react';
import './Box.css';
import p5 from 'p5';
import Box from './Box';

class BoxWrapper extends React.Component {
    
    componentDidMount() {
        this.canvas = new p5(Box, "boxSketch");
        console.log(this.props);
        //the name in quotation marks corresponds to the div id
    }

    shouldComponentUpdate() { // just in case
        return false;
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        const {type, summary, details} = this.props.object;        

        console.log(this.props);

        return(
            <div id="boxSketch">
                <div id='type'>{type}</div>
                     <h3 className='summary'>
                         <span>{summary.name}, </span>
                         <span>{summary.company}, </span>
                         <span>{summary.location}</span>
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