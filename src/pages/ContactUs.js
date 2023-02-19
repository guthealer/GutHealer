import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import SocialLink from '../components/SocialLink';





const green ="#5F8D4E";
const nature ="#A4BE7B";
const earth = "#285430";
const beize = "#E5D9B6";

const ContactBox = styled.div`
               display:flex;
               flex-wrap: wrap;
           
         justify-content: space-around;
              @media screen and (max-width: 700px) {
                     
                
              }
`;

const ContactText = styled.div`
              width: 400px;
          h1{
            color: ${earth};
          }
          h2{text-align:center;
        }
          
`;
const FormBox = styled.div`
           width: 600px;
          
`;
function ContactUs(props) {
    return (
        <>
        <ContactBox>
            <ContactText>
            
                <h2>CONSULTATIONS</h2>    
<h4>Follow me on quora and Instagram. DM me on Instagram for consultation</h4>
<SocialLink/>

              
            </ContactText>


             <FormBox>  
                 <Contact/>
                 </FormBox>
            
        </ContactBox>
        </>
    );
}

export default ContactUs;