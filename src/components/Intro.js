import React from 'react';
import styled from 'styled-components';
import mypic from './../Images/Akash-pic.png'
import SocialLink from './SocialLink';




const green ="#5F8D4E";
const nature ="#A4BE7B";
const earth = "#285430";
const beize = "#E5D9B6";

const Container = styled.section`
          display: flex;
          justify-content: center;
          align-items: center;
        min-height:70vh;
        background-color:rgb(100,150,100,0.5);

    @media screen and(max-width:700px){
        height: fit-content;
    }
     

`;
const IntroBox = styled.div`
       width: 100%;
        display : grid ;
        grid-template-columns: repeat(2,1fr);
        place-items: center;
        padding: 1rem;
       

        @media screen and (max-width:700px){
            grid-template-columns: repeat(1,1fr);
            place-items: center;
        }
`;

const MyPic = styled.div`

img{
   width:16rem;
   max-width: 90vh;
  
    border-radius: 2rem;
    border: 2px solid green;
    object-fit:contain;

    margin:auto;
    overflow: hidden;}
`;

const MyInfo = styled.div`
          max-width: 500px;
          h2{
            color: ${earth};
          }
          p{
            line-height: 1.7rem;
            font-size: 1.2rem;
        }
       
        
`;
function Intro(props) {
    return (
        <>
            <Container>
             <IntroBox>
                   <MyPic>
                         <img src={mypic} alt="" />
                   </MyPic>

                   <MyInfo>
                             <h2>Hello, I am GutHealer</h2>
                             <p>My name is Akash and I am Gut Health Coach and Certified Functional Nutritionist .
                            
                                I help people to treat their Gut health conditions like GERD,IBS and IBD.
                             </p>
                             <SocialLink/>
                   </MyInfo>
             </IntroBox> 
              </Container>
        </>
    );
}

export default Intro;