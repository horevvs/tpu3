
import styled from "styled-components";

export const Container = styled.div`
padding-top: 23px;
justify-content: center;
 display:flex;
 flex-wrap: wrap;
//  background-color: black
`;


export const FlexContainer = styled.div`
    padding: 12px;
    height:200px;
    width: 200px;
    border: 1px solid #ddd; 
    margin: 5px;
    transition: 1.1s;
    &:hover {
    background-color: #ddd;
    cursor:pointer
    
    
   }
`;

export const Btn = styled.button` 
  color: black; 
  border: 2px solid #f44336;
  border: none;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
    &:hover {
   background-color: #f44336;
   color: white;
   }
`;



export const Thumbnail = styled.div`
  border: 1px solid #ddd; 
  border-radius: 4px;  
  padding: 2px; 
   &:hover {
     border: 1px solid grey; 
     cursor:pointer
   }
`;



export const Img = styled.div`
    padding: 10px;
   margin: 5px;
   text-align: center;
   font-size:15px;
   border: 2px solid black;
`;

export const OpemModal = styled.div`
 display: flex;
 background-color: rgba(26, 23, 23, 0.46);
 flex-direction: column;
 padding:7%;
 height:800px;
 align-items: center;
 overflow: hidden;


 `;

export const Position = styled.div`
 position: relative;
  left: 0;
  top: 20px;
   &:hover {
     cursor:pointer;
     border: 1px solid black;
   }
 `;


export const Headercss = styled.div`
 justify-content: center;
 display:flex;
   padding: 20px;
    background-color: rgba(26, 23, 23, 0.46);
   text-align: center;
   font-size:25px
`;

export const Textcss = styled.p`
    padding: 1px;
`;


export const Cartcontainer = styled.div`
  text-align: center
`;

