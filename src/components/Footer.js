import React from 'react';
import styled from 'styled-components';
import SocialLink from './SocialLink';

const FooterBox = styled.div`
padding: 1rem;
      display:grid;
      grid-template-columns: repeat(2,1fr);
      background-color:darkgreen;
      color: white;
      align-items: center;
      @media screen and (max-width:700px ) {
         grid-template-columns: repeat(1,1fr);
        
      }
`; 

const NameBox = styled.div`
     h3{line-height:0.5rem;
     padding:0;
     margin:0;}
     text-align: center;
`;

const ContactBox = styled.div`
            display: flex;
            flex-direction: column;

            text-align: center;
           
        
`;
function Footer(props) {

    return (
        < >
            <FooterBox>
                <NameBox>
                    <h3>GutHealer</h3>
                    <p>Gut health conslutant</p>
                </NameBox>
                <ContactBox>
                        <h3>Contact Us</h3>
                      
                       

                       <SocialLink/>
                </ContactBox>
            </FooterBox>
        </>
    );
}

export default Footer;