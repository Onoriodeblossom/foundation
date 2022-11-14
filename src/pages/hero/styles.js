import styled from "styled-components";
import image from "../../assets/1.png"

export const WrapperContainer = styled.div`
width:100%;
/* height: 480px; */
background-color: #fff;
background-size:cover ;
background-repeat:no-repeat;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
background-image:url(${image});

@media (max-width: 600px) {
}


`; 

export  const TextContainer = styled.div`
padding-top:20px;
padding-bottom:30px;

width:50%;
@media only screen and (max-width: 600px) {
    // display: none;
   
  
}

`

export const Flex = styled.div`
justify-content: space-between;
align-items: center;
display: flex;
flex-direction: row;
width: ${(props)=>props.width ? props.width:"75%"};
@media (max-width: 600px) {

flex-direction: column;

width: ${(props)=>props.widthR ? props.widthR:"100%"};
    /* flex-direction: ${(props)=>props.flexDirection ? props.flexDirection : "column"}; */

}


`

export const ContactUsContainer = styled.div`
background-color: white;
width: 80%;
justify-content: space-around;
align-items: center;
display: flex;
flex-direction:row;

@media only screen and (max-width: 600px) {
    display: none;
    flex-direction: column;
  
}


`
export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (max-width: 600px) {
    width:100%;
    /* display: none; */
}
`

export const   ImpactStoryContainer = styled.div`
width: 80%;
justify-content: space-around;
align-items: center;
display: flex;
@media  (max-width: 600px) {

    width:100%;
  
}


`

export const ImpactStoryCard = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;
width:20%;

.flex{
    width:100%;

}
@media  (max-width: 600px) {

    width: 100%;
    flex-direction:column-reverse;

    .flex{
        width:80%;
        align-items:center;
    }
  
}

`

export const Image = styled.img`
height: 150px;
width:100%;


`