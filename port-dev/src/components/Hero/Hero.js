import React from "react";
import styled from "styled-components";
import {
    Box,
    Container,
    Typography,
    Flex,
    GridTemplate,
    Img,
    
} from './heroAnimation';
import { FadeInUpBox } from "./fadeInUpBox";
import { StaggerWrap } from "./staggerWrap";
import { ScaleBox } from "./scaleBox";
import { iconList } from "./iconList";

const MainHeading = styled(Typography)``;
MainHeading.defaultProps = {
    as: "h1",
    fontWeight: 2,
    color: "textTitle",
    fontSize: [6, null, 10, 11],
    lineHeight: [3, null, 6, 8]
}

const IconImage = styled(Img)`
    box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.5);
    background-color: transparent;
`;
IconImage.defaultProps = {
    borderRadius: 4,
    height: [40, null, 60, 80],
    width: [40, null, 60, 80]
};

const rand = (min, max) => { return Math.floor(Math.random() * (+max - +min)) + +min; };

const Hero = () => {
    return (
    <Box>
            <Container>
                <Flex
                    flexDirection="column"
                    minHeight={[580, 580, 750, 800]}
                    height={"calc(100vh - 64px)"}
                    justifyContent="center"
                    alignItems="center"
                    padding={[64, 64, 64, 64]}
                >
                    <Box maxWidth={["auto", 400, 500, 800]} style={{ zIndex: 1 }}>
                        <StaggerWrap childrenDelay={0.2} ease="backInOut">
                            <MainHeading mt={1} mb={["20px", null, "30px", "40px"]}>
                                <FadeInUpBox yOffset={64} duration={1}>
                                    Lorem ipsum
                                </FadeInUpBox>
                                <FadeInUpBox yOffset={64} duration={1}>
                                    dolor
                                </FadeInUpBox>
                            </MainHeading>
                            <FadeInUpBox yOffset={48} duration={1}>
                                <Typography fontSize={[4, null, 5]}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                                    natus, nesciunt quasi minima
                                </Typography>
                            </FadeInUpBox>
                        </StaggerWrap>
                    </Box>
                </Flex>
                <Flex justifyContent="center" style={{ overflowX: "hidden" }}>
                    <GridTemplate>
                        {iconList.map((item, key) =>
                            item !== null ? (
                                <Box key={key} pt={key % 2 === 0 ? 4 : 0} textAlign="center">
                                    <ScaleBox duration={1} delayOrder={rand(1, 12)}>
                                        <IconImage src={item.src} alt="" />
                                    </ScaleBox>
                                </Box>
                            ) : (
                                <Box />
                            )
                        )}
                    </GridTemplate>
                </Flex>
            </Container>
        </Box>
    );
}

export default Hero;