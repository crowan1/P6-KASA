import Footer from '../components/Footer.jsx';
import Nav from '../components/Banner-Apropos.jsx'
import Collapse from '../components/Collapse';
import CollapseData from '../../src/data/collapse.json';
import React from 'react';


const About = () =>{
    return (
    <div>
        {Nav}
        <main>
            <div className='Collapse-dropdown'>
                {CollapseData.map((item) =>{
                    return (
                        <div key={item.id}>
                            <Collapse content={item.content} title={item.title} />
                        </div>
                    );
                })}

            </div>
        </main>
        {Footer}
    </div>
)


}

export default About