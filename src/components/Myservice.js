import React from 'react';

import styled from 'styled-components';



const green ="#5F8D4E";
const nature ="#A4BE7B";
const earth = "#285430";
const beize = "#E5D9B6";




const ServiceBox = styled.div`
           display: grid;
           grid-template-columns: repeat(3,1fr);
           place-items: center;

        
        
          padding: 2rem;
          gap: 1rem;
           @media screen and (max-width:700px){
            grid-template-columns: repeat(1,1fr);
            padding: 0px;
            
        }
`      
;

const ServiceCard = styled.div`
                max-width:400px ;
                text-align: center;
                background-color:rgba(80,150,70,0.6);
                padding: 1rem;
                border-radius: 1rem;
                
              img{
                width: 100%;
                height:100%;
                aspect-ratio:16/9;
        
                object-fit: cover;
                border-radius: 1rem;
              } 

              @media screen and (max-width:700px){
                    max-width:100%;
            
        }
`;

function Myservice(props) {
    return (
        <div>

            <h2 style={{textAlign:'center',color:'green'}}>Services</h2>
            <ServiceBox>
              <ServiceCard>
                <img src="https://magazine.medlineplus.gov/images/uploads/main_images/heartburn-difference.jpg" alt=""/>
                <h4>Gastroesophageal Reflux Disease (GERD)</h4>
                </ServiceCard> 

                <ServiceCard>
                <img src="https://gastrohealth.com/-/media/decorative-images/conditions/gastro-irritablebowelsyndrome-900x600-decorative.ashx" alt=""/>
                <h4>Irritable Bowel Syndrome (IBS)</h4>
                </ServiceCard> 

                <ServiceCard>
                <img src="https://www.news-medical.net/image.axd?picture=2019%2F10%2F%40shutterstock_1414696697.jpg" alt=""/>
                <h4>Inflammatory Bowel Disease (IBD)</h4>
                </ServiceCard> 
                </ServiceBox>
             
        </div>
    );
}

export default Myservice;