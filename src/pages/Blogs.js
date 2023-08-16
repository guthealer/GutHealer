import React from 'react';
import styled from 'styled-components';


const Blog_box = styled.div`
          margin: 2rem;
           display: flex;
           flex-wrap: wrap;
           gap: 10px;
           justify-content: start;
           
`;
const BlogCard = styled.div`
         max-width:300px ;
         max-height: 300px;
         padding: 
         1rem;
         border: 2px solid green;
         border-radius: 2rem;
         background-color:rgba(140,180,100,0.4);
        
         button{
            font-size: 1.3rem;
            height:3rem;
            background-color: green;
            color: white;
            border: 2px solid green;
            border-radius: 20px;
            cursor: pointer;
         }
`;

function Blogs(props) {
    return (
        <div style={{minHeight:''}}>
         <Blog_box>
           

            <BlogCard>
                <h2>MY 60 DAYS OF JUICE FASTING</h2>
              <a href="https://ibsreliefforever.blogspot.com/2021/12/my-experience-of-60-days-juice-fasting.html"  target='_blank'>
                <button type="">Click to read </button></a>
            </BlogCard>


            </Blog_box>
        </div>
    );
}

export default Blogs;