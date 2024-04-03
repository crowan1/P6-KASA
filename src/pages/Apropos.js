import Footer from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/Footer.js';
import Nav from '/Users/charloo/Desktop/workflow/kasa/src/Acceuil/components/Banner-Apropos.js'
import Collapse from '../Acceuil/components/Collapse';
import CollapseData from '/Users/charloo/Desktop/workflow/kasa/src/data/collapse.json';
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