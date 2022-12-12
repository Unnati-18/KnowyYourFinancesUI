import React from 'react';
import TopicItem from './topicItem';

const TopicName = props => {
    return (
        <ul className="place-list">
            {props.items.map(prop => (
                <TopicItem
                key={prop.id}
                id={prop.id}
                image={prop.image}
                title={prop.title}
                mainContent={prop.mainContent}
                additionalContent={prop.additionalContent}
                />
        ))}
        </ul>
      );
    };
    
    export default TopicName;