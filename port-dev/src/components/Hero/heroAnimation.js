import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    background,
    border,
    bottom,
    boxShadow,
    color,
    compose,
    layout,
    left,
    position,
    right,
    space,
    top,
    typography,
    lineHeight,
    flexbox,
    grid,
} from 'styled-system';

export const composedHelpers = compose(
    background,
    layout,
    border,
    space,
    color,
    typography,
    top,
    bottom,
    right,
    position,
    left,
    boxShadow,
    lineHeight,
    flexbox,
    grid,
);

// Box component

export const Box = styled.div`
    ${composedHelpers}
`
Box.defaultProps = {};

// Typography component
export const Typography = styled(Box)`
    ${composedHelpers}
`;

Typography.defaultProps = {
    fontWeight: 1,
};

// Container component
export const Container = styled(Box)`
    margin: 0 auto;
    width: 100%;
`;

Container.defaultProps = {
    minWidth: 288,
    maxWidth: 1440,
    py: 0,
    px: 3,
};

// Flex component
export const Flex = styled(Box)`
    display: flex;
    ${composedHelpers}
`;

Flex.defaultProps = {};

// FlexItem component
export const FlexItem = styled(Flex)``;

FlexItem.defaultProps = {
    bg: "brand",
    height: 300,
    mb: 4,
    fontSize: 10,
    fontWeight: 2,
    color: "text100",
    justifyContent: "center",
    alignItems: "center"
};

// FlexList component
export const FlexList = styled(Flex)``;

FlexList.defaultProps = {
    flexDirection: "column"
};

// Grid component
export const Grid = styled(Box)`
    ${composedHelpers}
`;

Grid.defaultProps = {
    display: "grid",
}

// GridTemplate component
export const GridTemplate = styled(Grid)``;

GridTemplate.defaultProps = {
    width: "100%",
    height: "calc(100vh - 64px)",
    position: "absolute",
    top: 64,
    // gridTemplateRows: ["repeat(8, 1fr)", null, null, "repeat(5, 1fr)"],
    gridTemplateColumns: ["repeat(8, 1fr)", null, null, "repeat(9, 1fr)"],
    // gridTemplateRows: ["repeat(5, 1fr)"],
    // gridTemplateColumns: "repeat(9, 1fr)",
    gridGap: 24
    // gridGap: [24, null, "10px 40px", "40px 78px"]
};

// Heading component
export const Heading = styled(Typography)`
    font-size: ${props => props.as === "h1" ? "32px" : props.as === "h2" ? "24px" : "20px"};
`;

Heading.defaultProps = {
    as: "h1",
    fontWeight: 2,
    color: "black",
}

// Img component
export const Img = styled.img`
    width: 100%;
    object-fit: cover;
    ${composedHelpers}
`;

Img.defaultProps = {
    // borderRadius: 8,
}

// Link component
export const Link = styled(Box)`
  transition: opacity 0.5s ease-in-out;
  :hover {
    opacity: 0.8;
    transition: opacity 0.5s ease-in-out;
  }
`;
Link.defaultProps = {
    as: "a",
    color: "link"
};

// MotionBox component
export const MotionBox = styled(motion.div)`
  ${composedHelpers}
`;

MotionBox.defaultProps = {};

// Paragraph component
export const Paragraph = styled(Typography)``;
Paragraph.defaultProps = {
    fontSize: 4,
    pb: 3
};


