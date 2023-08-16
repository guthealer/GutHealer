import React from 'react';
import styled from 'styled-components';
import Intro from '../components/Intro';
import certificate_img from '../Images/akash_ithrive_certificate.jpg'



const green ="#5F8D4E";
const nature ="#A4BE7B";
const earth = "#285430";
const beize = "#E5D9B6";

const MyIntro = styled.div`
        min-height:100vh ;
        max-width: 900px;
        margin: auto;
        padding:1rem;
        color: ${earth};
      
        h2{
            text-align: center;
           
        }
        section{
            padding: 1rem;
           line-height: 1.8;
           font-size: 1.2rem;
           border-radius: 2rem;
           
         background-color:rgba(150,170,130,0.3);
         p{
            line-height: 1.7rem;
            font-size: 1.2rem;
        }
        
        }

`;

function About(props) {
    return (

        <div>
            <MyIntro>
                <Intro/>
                <br/>
               
                <section>
               

                <h2>About me</h2>
             
                <p>
                      I have suffered with multiple health Conditions like GERD, IBS, Hemorroids and fissures.
                      It all started when i was in final year of my college (2017). I started having anal pain and constipation. I was diagnosed with Anal fissure.
                      I was getting treatments in homeopathy and ayurveda, It was manageable.</p>

                      <p>
                      In january 2018, I had a bad fever, after fever my situation got worse and I was diagnosed with GERD. I kept visting many doctors but nothing was working.
                </p>
                <p>
                    In February-2019 ,I was diagnosed with IBS also. I had multiple symptopms of GERD and IBS.
                    I also had surgery for Anal fissure. But it failed and i got no relief.
                    
                </p>

                <p>
                    In FEb-2021, I was almost bed ridden, then I decided to treat myself by own research. I started studying about roots of gut problems. I was experimenting on myself with different therapies and supplementations.

                </p>

                <p>
                    I started feeling improvement within few days. Then I was sure of one thing that its the only way to escape this hell.
                    Within one year I was almost free from GERD and IBS . For anorectal problems i again had surgery. It took couple of months to recover from surgery.
                </p> 
                <p>
                    Later on , I decided to explore this field of health world. I enrolled into a Functional Nutrition course and gained a certificate from <a href="https://www.ithrive.academy/" style={{color:'darkred'}}>iThrive Academy </a> .
                    I have been learning and treating clients since 2021.
                    I have handled many clients with health conditions like GERD, IBS, IBD, Body Pain, Constipation and Diarrhea.
                    </p> 

                    <p>

                    </p>
                 <img src={certificate_img} alt="certificate"  style={{maxWidth:'400px',borderRadius:'1rem'}} width='100%'/>
               
                 </section>
            </MyIntro>
        </div>
    );
}

export default About;