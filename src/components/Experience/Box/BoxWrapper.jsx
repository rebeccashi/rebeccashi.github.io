import React from 'react';
import './BoxWrapper.css';
import p5 from 'p5';
import Box from './Box';
import $ from 'jquery';
import calendar from '../../../images/calendar-snapshot.png';
import cssa from '../../../images/cssa.png'

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
        // this.canvas.pushProps(this.state.canvasWidth);
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    componentDidUpdate() {
        // memoize
        // this.canvas.pushProps(this.state.canvasWidth);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.canvas.pushProps(canvasWidth);
    // }

    render() {
        const { index, type, summary, date, details, img } = this.props.object;  
        const { parentWidth } = this.props;
        // const parentWidth = $(window).innerWidth();
        const height = $(window).height();
        console.log(parentWidth);
         
        let width, marginLeft, marginTop;
        if (parentWidth > 0) {
            if (parentWidth > 800) {    //3 boxes
                console.log('3 boxes + ' + parentWidth)
                width = parentWidth/3 - 10;
                if (index % 3 === 1) {  //middle element
                    marginLeft = width + 10; 
                } else if (index % 3 === 2) {
                    marginLeft = 0;
                } else if (index % 3 === 0) {
                    marginLeft = width * 2 + 20;
                }
            } else if (parentWidth > 500) { //2 boxes
                console.log('2 boxes')
                width = parentWidth/2;
                if (index % 2 === 1) {  //first box
                    marginLeft = 0;
                } else {    //second box
                    marginLeft = width; 
                }
            } else {
                console.log('1 box' + parentWidth)
                width = parentWidth;
            }
        }

        if (parentWidth > 800) {    //3 boxes
            if (index % 3 === 1) {
            } else if (index % 3 === 2) {
                marginTop = height / 4;
            } else if (index % 3 === 0) {
                marginTop = height / 2;
            }
        } else if (parentWidth > 500) { //2 boxes
            if (index % 2 === 1) {
                marginTop = (index-1) * height/2;
            } else {
                marginTop = height/3 + (index - 2) * height/2;
            }
        } else {
            marginTop = (index - 1) * height / 1.2;
        }

        // this.setState({canvasWidth: width})
          
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
                    ( (img.alt==='calendar snapshot' &&
                        <a href={img.link} target="_blank" rel="noopener noreferrer">
                            <img src={calendar} className="snapshot" alt={img.alt} />
                        </a>)
                   || (img.alt === 'cssa snapshot' && 
                    <a href={img.link} target="_blank" rel="noopener noreferrer">
                                <img src={cssa} className="snapshot" alt={img.alt} />
                            </a>
                        )
                    )
                }
            </div>
        )
    }
}

export default BoxWrapper;