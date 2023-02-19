import styled from "styled-components";
import React from 'react';

const HeaderBox = styled.div`
             display: flex;
      color:brown;
      background-color:whitesmoke;
      align-items: center;
     h4{ margin-left: 10px;
     padding:0;
     line-height:1px;}
`;


function Header(props) {

    return (
        <div>
                 <HeaderBox>
                           <h4>GUTHealer:</h4>
                           <h5>GUT HEALTH CONSULTANT</h5>
                           <h2>HUtHealer</h2>
                 </HeaderBox>   
        </div>
    );
}

export default Header;