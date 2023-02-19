import React from 'react';
import styled from 'styled-components';



const green ="#5F8D4E";
const nature ="#A4BE7B";
const earth = "#285430";
const beize = "#E5D9B6";


const ServiceBox = styled.div`
padding-top: 2rem;

padding: 1rem;
             li{font-size:1.2rem;
             padding:1rem;
         color: green;
            
            }

             h1{
                color: ${earth};
             }
`;
function Services(props) {
    return (
        <>
        <ServiceBox>
           <h1>Services</h1>
        
           <ul>
               <li>Gut health consultation</li>
     
          
            <li>Chronic Constipation</li>
            <li>Loose Stool / Frequent Stool Issues / IBS</li>
            <li>Gas / Bloating / Indigestion</li>
            <li>Candida / yeast / fungal owergrowth</li>
            <li>Small Intestine Bacterial Overgrowth</li>
            <li>GERD / Acid reﬂux</li>
            <li>Headaches / Migraines</li>

            <li>Brain Fog / Fatigue</li>
            <li>Anxiety / Mood Swings</li>
           </ul>
           
            </ServiceBox>
        </>
    );
}

export default Services;