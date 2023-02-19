import React from 'react';

import styled from 'styled-components';

const green ="#5F8D4E";
const nature ="#A4BE7B";
const earth = "#285430";
const beize = "#E5D9B6";

const IntroBox = styled.div`
        display : grid ;
        grid-template-columns: repeat(2,1fr);
        place-items: center;
        background-color: ${beize};

        p{
            line-height: 1.7rem;
            font-size: 1.2rem;
        }

        @media screen and (max-width:700px){
            grid-template-columns: repeat(1,1fr);
        }
`;

const GutPic = styled.div`
    max-width: 500px;
    overflow: hidden;
    padding: 1rem;
    img{width:100%;
        aspect-ratio: 16/9;
        border-radius: 1rem;
      
        object-fit: cover;
    }
`;

const Info = styled.div`
      padding:1rem ;
      max-width: 500px;

      h2{
      color: ${earth};}
      p{
        color: black;
      }
`;
function GutIntro(props) {
    return (
        <div>
            <IntroBox>
                
                 <Info>
                    <h2>  WHAT IS GUT HEALTH?</h2>
             <p>    
Our gut or in other words, our digestive system is the most underrated organ which is the cornerstone of health. The gut is really an ecosystem which comprises viruses, bacteria and fungi. These microorganisms actually govern very important functions in the body such as immunity, hormonal function, digestion and even our mood.

90% of our cells belong to the microbes, and only 10% of the cells are human which makes us more of a super microorganism than a superhuman. 75% of our immune system lies in the gut which explains why our gut health is important for a resilient</p> 
</Info> 
              <GutPic>
                <img src="https://www.healthkart.com/connect/wp-content/uploads/2021/08/900x500_banner_HK-Connect_These-Ingredients-Are-The-Secret-To-A-Healthier-Gut.jpg" alt="" />
              </GutPic>
             </IntroBox>
        </div>
    );
}

export default GutIntro;