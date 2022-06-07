import styled from "styled-components";

export const TalentH1 = styled.h1`
color:#000;
font-size: 30px;
text-align: center;
padding-bottom: 15px;
margin-top: 20px;
/* margin-left: 30px; */

@media screen and (max-width:760px){
    font-size: 22px;
}
@media screen and (max-width:760px){
    font-size: 16px;
}
`;

export const TalentP =styled.p`
color:#000;
font-size: 30px;
/* margin-left: 30px; */
padding-bottom: 20px;
text-align: center;
justify-content: center; 




@media screen and (max-width:760px){
    font-size: 22px;
}
@media screen and (max-width:760px){
    font-size: 16px;
}
`;
export const TalentH3 = styled.h3`
color:#000;
font-size: 20px;
/* margin-left: 30px; */
text-align: center;
justify-content: center; 
padding-bottom: 10px;
padding-top: 10px;

@media screen and (max-width:760px){
    font-size: 22px;
}
@media screen and (max-width:760px){
    font-size: 16px;
}
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;

`;

export const FormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 40px 20px;
`;

export const Form = styled.div`
width: 100%;
max-width: 700px;
padding: 40px;
background-color: white;
border-radius: 10px;
box-sizing: border-box;
box-shadow: 0px 0px 20px 0px rgba(0, 0,0, 0.2);
`;
export const Input = styled.input`
display: block;
width: 100%;
 height: 40px;
 border-radius: 5px;
 border: 1px solid #ddd;
 margin: 10px 0 20px 0;
 padding: 20px;
 box-sizing: border-box;
`;

export const TextArea = styled.textarea`
min-height: 100px;
resize: none;
width: 100%;
 height: 40px;
 border-radius: 5px;
 border: 1px solid #ddd;
 margin: 10px 0 20px 0;
 padding: 20px;
 box-sizing: border-box;
`;

export const Button = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;
export const Fieldset = styled.fieldset`
  border: none;
  /* border-radius: 5px; */
  padding: 10px;
  margin: 20px 0;
  text-align: center;
  /* legend {
    padding: 0 10px;
  } */
  label {
    padding-right: 20px;
    
  }
  input {
    margin-right: 10px;
  }
`;
export const ImgUpload = styled.div`
display: flex;
justify-content: center;
padding-bottom: 20px;
height: 130px;


`;
export const Buttons = styled.button`
  width: 130px;
  height: 130px;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 50%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
`;