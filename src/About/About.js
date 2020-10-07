import React from 'react';
import './About.css';

class About extends React.Component {
    render(){
        return (
            <div className='about'>
                Этот сайт сделан мной в процессе обучения в рамках курса по React от <a href="https://itgid.info/">ItGid</a>
            </div>
        );
    }
}

export default About;