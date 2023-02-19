import React from 'react';

import styled from 'styled-components';

import testPic1 from './../Images/TESTIMONIAL1.png' 
import testPic2 from './../Images/TESTIMONIAL2.png'
import testPic3 from './../Images/TESTIMONIAL3.png'
import testPic4 from './../Images/TESTIMONIAL4.png'

const TestimonialBox = styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap: wrap;


`;

const TestCard = styled.div`
margin: 5px;
max-width: 350px;

           img{width:100%;
            
           border-radius:1rem;
        
        border:3px solid darkgreen;}

           @media screen and (max-width:400px) {
                  
            
           }
`;

function Testimonial(props) {
    return (
        <div>

            <h2 style={{textAlign:'center',color:'green'}}>Testimonials</h2>
            <TestimonialBox>
                <TestCard>
                    <img src={testPic1} alt="p1" />
                </TestCard>
                <TestCard>
                    <img src={testPic2} alt="p2" />
                </TestCard>
                <TestCard>
                    <img src={testPic3} alt="p3" />
                </TestCard>
                <TestCard>
                    <img src={testPic4} alt="p4" />
                </TestCard>
            </TestimonialBox>
            
        </div>
    );
}

export default Testimonial;