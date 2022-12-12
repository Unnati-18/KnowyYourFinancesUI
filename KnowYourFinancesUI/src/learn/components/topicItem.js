import React from 'react';
import './topicItem.css';


const TopicItem = props => {
    const results = [];

    props.additionalContent.forEach(ref => {
        results.push(
        <ul key={ref.id}>
            <li><a target="_blank" href={ref.link}>{ref.display}</a></li>
        </ul>
        );
    });

    return (
        <><div className='container'>
            <img className='image-container' src={props.image} alt=""/>
            <div className='text-container'>
                <h1 className='heading'>{props.title}</h1>
                <p dangerouslySetInnerHTML={{__html: props.mainContent}}></p>
            </div>
        </div>
        <div className='next-para'>
            <h2>Reference Links -</h2>
           {results}
        </div></>
    );
  };
  
  export default TopicItem;