import React from 'react';

const Box = (props) => {

    const {type, summary, details} = props.object;

    return (
        <div className='outer'>
            <div className='middle'>
                <div className='inner'>
                    <div className='type'><h2>{type}</h2></div>
                    <h3 className='summary'>
                        <span>{summary.name}, </span>
                        <span>{summary.company}, </span>
                        <span>{summary.location}</span>
                    </h3>
                    <ul>
                        {details.map(detail => <li>{detail}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Box;