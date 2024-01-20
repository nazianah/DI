import React from 'react';
import data from '../data/complex.json'

class Example1 extends React.Component {
    render() {
        return (
            <div>
                {data.SocialMedias.map((SocialMedia, index) => (
                    <div key={index}>{SocialMedia}
                        
                        
                    </div>
                ))}
            </div>
        )
    }
}

export default Example1;