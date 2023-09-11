import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';



const green ="#5F8D4E";
const nature ="#A4BE7B";
const earth = "#285430";
const beize = "#E5D9B6";



const ContainerForm = styled.div`
               padding:5px;
              
               h2{text-align:center;
                color: ${earth};
               }
`;

const MyForm = styled.form`
        
          max-width: 600px;
          margin: auto;
          border: 2px solid darkgreen;
          border-radius:20px;

          button{color:white;
          
             margin: 1rem;
          
            background-color:rgba(100,130,100);
            font-size: 1.3rem;
            border-radius: 10px;
            border:2px green solid;
            &:hover{
              background-color: ${beize};
              color: green;
            }
          }
`;

const InputBox = styled.div`
        display: flex;
        flex-direction: column;
        margin:1rem;

        input{font-size:1.2rem;
            padding:5px;
            border:2px solid darkgreen;
            border-radius: 10px;
            background-color: transparent;
          
        }
        label{color:darkgreen;
        margin-top:1rem;
      margin-bottom:0.5rem}
    
`;

const Label = styled.label`
        font-size : 15px;
`;






function Contact(props) {



  
        const [formData, setFormData] = useState({
          name: "",
         
          email: "",
          mob_number:"",
          health_condition:""
        
        });
      
        const updateFormData = event =>
          setFormData({
            ...formData,

            [event.target.name]: event.target.value
          });
       
      
        const { name, email,mob_number,health_condition } = formData;

     
     function handleSubmit(e){
         
          const clientName =document.myform.name.value;
          const clientEmail =document.myform.email.value;
          const clientMob_number  =document.myform.mob_number.value;
          const clientHealth_condition  =document.myform.health_condition.value;
          if(clientName===''||clientEmail===''||clientMob_number===''|| clientHealth_condition==='' ){
            e.preventDefault();
            alert('Please Fill All Information')
            return false
          }
          else{
            return true
          }
      
     }



    //  action="https://formbold.com/s/6rKYr"  onSubmit={handleSubmit}

    return (
        <div>
           
            <ContainerForm >
                <h2>Contact Me</h2>
                
            <MyForm   name='myform'   action="https://formbold.com/s/6rKYr"  onSubmit={handleSubmit}
  method="POST" >
                   <InputBox>
                             <Label>Name</Label>
                             <input type="text" name="name"
                             value={name}
                             onChange={e => updateFormData(e)}/>
                   </InputBox>

                   <InputBox>
                             <Label>Email</Label>
                             <input type="email" name="email" 
                             value={email}
                             onChange={e => updateFormData(e)}/>
                   </InputBox>

                   <InputBox>
                             <Label>Mob. Number</Label>
                             <input type="number" name="mob_number"
                             
                             value={mob_number}
        onChange={e => updateFormData(e)}/>
                   </InputBox>

                   <InputBox>
                             <Label>Health Condition & Symptoms</Label>
                             <input type="text" name="health_condition" value={health_condition}
                             onChange={e => updateFormData(e)} />
                   </InputBox>

                   <InputBox>  
                  
                   <button type='submit' value='Submit' disabled>Submit</button>
                   </InputBox>
                   <p style={{color:'red'}}>**Don't send form*** DM on Instagram****</p> 
            </MyForm>
           
            
            </ContainerForm>
          
        </div>
    );
}

export default Contact;