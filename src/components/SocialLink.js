import React from 'react';
import styled from 'styled-components';
import q_logo from './../Images/q-logo.png'
import ig_logo from './../Images/ig-logo.png'



const LogoBox = styled.div`
           display: flex;
           flex-wrap: wrap;
           justify-content: center;
           gap: 1rem;
           `;

const Logo = styled.div`

a{text-decoration:none;}
          img{border:2px wheat solid;
            outline: 2px darkgreen solid;
            width:2.5rem;
            border-radius:1rem ;
         background-color: darkgreen;
          }
`;
function SocialLink(props) {
    return (
        <div>
<LogoBox>
            <Logo>
            <a href="https://guthealer.quora.com/?ch=10&oid=1859532&share=396067ef&srid=ux4NUH&target_type=tribe">
                <img src={q_logo} alt="" />
            </a></Logo>

            <Logo>
            <a href="https://www.instagram.com/gut_healer/">
                <img src={ig_logo} alt="" />
            </a>
            </Logo>
            
            </LogoBox>
        </div>
    );
}

export default SocialLink;