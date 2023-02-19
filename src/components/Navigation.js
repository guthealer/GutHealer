
import React, { useRef, useState } from 'react';
import { NavLink} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import logo_pic from './../Images/logo.svg'
import web_logo from './../Images/GutHealer_logo.png'



const green ="#5F8D4E";
const nature ="#A4BE7B";
const earth = "#285430";
const beize = "#E5D9B6";


const NavBox = styled.div`
      position: sticky;
      top:0rem; z-index:99999;
      background-color:darkgreen;

      @media screen and ( max-width:700px){
             
             position: sticky;
              top: 2.5rem;
             
      }
      
     
      
`;


const menuOpen_animate = keyframes`
          0%{
                height: 0;
                display: flex;
                
          }
          100%{
            height: 40vh;
          }
`


const menuClose_animate = keyframes`
          0%{
                height: 40vh;
                
                
          }
          100%{
            height:0;
          }
`


const Navb = styled.div`
        
         
           display: flex;
            justify-content:space-around;
            align-items: center;
            
            .logo-pc{
              font-size:2rem;
              color: wheat;
              font-weight: 700;
              font-family: cursive;
              text-decoration: none;
              @media screen and (max-width:700px){
                display: none;
                
              }
            }

            @media screen and ( max-width:700px){
              display: ${({prop})=>(prop ? 'none':'flex')};;
             
              overflow:hidden;
        
             position: sticky;
              top: 2.5rem;
              background-color:darkgreen;
              flex-direction: column;
             /* height:30vh; */
              align-items: stretch;
              position:fixed;
              width: 100%;
             
             animation: ${({prop})=>(!prop ? menuOpen_animate:undefined)} 0.4s forwards;
        
            
              a{
                
              
                border-bottom: 2px solid wheat;
              }
            }


        a{text-decoration:none;
           font-size:1.4rem;
      padding:0.3rem;}

      
        
`;

const MenuBar = styled.div`
position: sticky;
display: flex;
justify-content:space-between;
align-items: center;
top: 0px;
z-index: 99;
height:2.5rem;
 background-color: darkgreen;
@media screen and  (min-width:700px){
  display: none;
 
}

.menu-btn{
    position: absolute;
    right: 5px;
    top: 0px;
    margin: 0;
}



.logo{
   font-family: cursive;
  font-size:2.3rem;
  
  
  text-decoration: none;
  color: wheat;
  font-weight:700;


 
}

`;

const Menubtn = styled.button`
             
              display: none;
              @media screen and ( max-width:700px){
             display: block;
          
            top: 0px;
            
         
             font-size: 2rem;
           width:2rem;
           height:2rem;
        
        
           padding: 0px;
           
           color: wheat;
           font-weight: 300;
           border: none;
          background-color:darkgreen;
         
         
      
            } 
`;








function Navigation(props) {
  const[state,setState] = useState(true);


  const NavLinkStyle = ({ isActive }) => { 
    window.scrollTo(0,0);

    return { color: isActive ? "white" : "wheat" };
  };

  const mclick = ()=>{setState(!state);console.log(state);}
  function hideMenuclick(){
    setState(!state)
  }
  

  const cross = <span>&#10006;</span>;
  const hamburger =<span>&#x2630;</span> ;

    return (
      <>

      <MenuBar>
      <Menubtn onClick={()=>setState(!state)} prop={state} className='menu-btn'>  {state?hamburger:cross}</Menubtn>
      <NavLink to="/"   className='logo'> 
          GutHealer
      </NavLink> 
           </MenuBar>   

        <NavBox> 
            
        
        <Navb prop={state} >
        <NavLink to="/"   className='logo-pc'> 
       GutHealer
        </NavLink> 
          <NavLink to="/"  style={NavLinkStyle}   onClick={hideMenuclick}>Home</NavLink>
          <NavLink to="Services"  style={NavLinkStyle}  onClick={hideMenuclick}>Services</NavLink>
          <NavLink to="About"  style={NavLinkStyle}   onClick={hideMenuclick}>About</NavLink>
          <NavLink to="ContactUs"  style={NavLinkStyle} onClick={hideMenuclick}>Contact </NavLink>
          <NavLink to='Blogs' style={NavLinkStyle}   onClick={hideMenuclick}>Blogs</NavLink>
        </Navb>
</NavBox> 


           </>
  
  
    );
}

export default Navigation;