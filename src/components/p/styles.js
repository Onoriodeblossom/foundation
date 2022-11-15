import styled from "styled-components"

export const  Text = styled.p`
font-family:inter ;
color:${(props)=> props.color ? props.color : "#515151"};
font-size: ${(props)=>props.size ? props.size : "16px"};
font-weight: 500;
letter-spacing: 0em;
text-align: ${(props)=> props.align ? props.align : "center"};





`