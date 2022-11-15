import  React from "react"
import { Button } from "../../components/button/button"
import { Container } from "../../components/Container/styles"
import { H1 } from "../../components/h1/h1"
import { P } from "../../components/p/p"
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Four from "../../assets/4.png";
import {BiArrowBack} from "react-icons/bi"

import {
  Link,
} from "react-router-dom";
import { Flex, Icon, Image, ImageSection, ImpactStoryCard, Next, TextContainer, WrapperContainer } from "./styles"
import { OrangeHeaderText } from "../../components/orangeText/styles"
import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header"


const   Education = () =>{
    const impactStory =[
        {
          img: Two,
          title:"Anna Kingston",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet,  ",
        },
        {
          img: Three,
          title:"Anna Kingston",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet,  ",
        },
        {
          img: Four,
          title:"Anna Kingston",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor posuere neque at mollis. Mauris vitae tortor leo. Lorem ipsum dolor sit amet, ",
        },
      ]
    

    return(
        <Container>
            <Header/>
            <WrapperContainer>
                
                <ImageSection>

                </ImageSection>
                <Flex>
                    <H1 align={"left"}>Encourage Education, skills <br/>Acquisition and Trade</H1>

                    <Flex width="20%">
                        <Button>
                            Donate
                        </Button>
                        <Button backgroundColor={"white"} color="#FFBD14">Voluteer</Button>
                    </Flex>
                </Flex>
                <TextContainer>
                    <P align={"start"}>
                    Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna
                       aliqua. Ut enim ad minim veniam, quis 
                       nostrud exercitation ullamco laboris 
                       nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt
                          mollit anim id est laborum. Lorem 
                          ipsum dolor sit amet, consectetur 
                          adipiscing elit, sed do eiusmod 
                          tempor incididunt ut labore et 
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </P>
                    <P align={"start"}>
                    Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna
                       aliqua. Ut enim ad minim veniam, quis 
                       nostrud exercitation ullamco laboris 
                       nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt
                          mollit anim id est laborum. Lorem 
                          ipsum dolor sit amet, consectetur 
                          adipiscing elit, sed do eiusmod 
                          tempor incididunt ut labore et 
                          dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit
                             esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint occaecat cupidatat non proident,
                               sunt in culpa qui officia deserunt mollit anim id 
                               est laborum. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis 
                                 nostrud exercitation ullamco 
                                 laboris nisi ut aliquip ex 
                                 ea commodo consequat. Duis aute 
                                 irure dolor in reprehenderit in
                                  voluptate velit esse cillum dolore eu
                                   fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </P>
                </TextContainer>
                    <OrangeHeaderText>Our Impact stories</OrangeHeaderText>
                <Flex>
                    {/* <br/> */}

                {
            impactStory.map(({img,text,title})=>(

          <ImpactStoryCard>

          <Image src={img}/>
          <div>

          <OrangeHeaderText size="18px">
            {title}
          </OrangeHeaderText>
          <P align={"start"}>{text}</P>
          </div>
          </ImpactStoryCard>
            ))
          }
                </Flex>

            </WrapperContainer>
            <Next>
                <Icon>
                    <BiArrowBack/>
                    <P color="black">Back</P>
                </Icon>

                <OrangeHeaderText>
                  <Link to="/community">

                Next - Community Development Project
                  </Link>
                </OrangeHeaderText>
            </Next>
                <Footer/>
        </Container>

    )
}

export default Education