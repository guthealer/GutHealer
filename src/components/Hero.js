import React from 'react';
import styled, { keyframes } from 'styled-components';

const green ="#5F8D4E";
const nature ="#A4BE7B";
const earth = "#285430";
const beize = "#E5D9B6";



const heroText_animate = keyframes`
    0%{
        top:-100%;
        transform: translate(-50%,-100%);
    }

    100%{
        left: 50%;
            top: 50%;
            z-index:1;
            text-align: center;
        transform: translate(-50%,-50%);
    }
`;

const HeroBox = styled.div`

width:100%;
height:fit-content;
overflow: hidden;
/* background-image: url('https://thecookbook.pk/wp-content/uploads/2018/10/nutrion.jpg'); */
           position: relative;
           background-repeat: no-repeat;
        background-size: cover;
       

           h2{color:wheat;
           
            border-radius: 10px;
            padding: 10px;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-size:2.5rem;
            
            position: absolute;
            /* left: 50%;
            top: 50%;
            z-index:1;
            text-align: center;
        transform: translate(-50%,-50%); */

        animation: ${heroText_animate} 2s linear  forwards;
       
           }
          
           img{
            width:100%;
            height:auto;
            max-height: 70vh;
/*             
            position: absolute;
            left: 0;
            top: 0; */
             object-fit:cover;
             filter: brightness(80%);
          
           }

         
        
`;
function Hero(props) {

    return (
        <div>
            <HeroBox>
                <h2>Happy Gut Happy Life</h2>
                <img src="https://thecookbook.pk/wp-content/uploads/2018/10/nutrion.jpg" alt="" width='100%'/>
              
            </HeroBox>
        </div>
    );
}

export default Hero;