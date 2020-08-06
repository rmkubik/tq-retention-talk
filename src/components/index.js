import React from "react";
import styled from "styled-components";

const FlexRow = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > * {
    flex-grow: 1;
    margin: 8px;
  }
`;

const Card = styled.div`
  background-color: ${(props) => props.bgColor || props.theme.colors.middle};
  color: ${(props) => props.color || props.theme.colors.dark};
  box-shadow: 4px 4px 0px ${(props) => props.theme.colors.dark};
  padding: 8px;
  border: 2px ${(props) => props.theme.colors.dark} solid;
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    margin: 0;
  }
`;

const FlexCardRow = ({ children }) => {
  return (
    <FlexRow>
      {children.map((child, index) => (
        <Card key={index}>{child}</Card>
      ))}
    </FlexRow>
  );
};

const Section = ({ children }) => {
  return <section>{children}</section>;
};

const Icon = styled.i`
  /* background: -webkit-linear-gradient(
    45deg,
    rgba(255, 0, 89, 1) 0%,
    rgba(0, 179, 255, 1) 33%,
    rgba(255, 0, 89, 1) 66%,
    rgba(0, 179, 255, 1) 100%
  );
  background-position-x: 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: ${(props) => props.theme.colors.accent};
  filter: drop-shadow(2px 2px 0 ${(props) => props.theme.colors.dark});
`;

const TimeIcons = ({ count }) => {
  if (typeof count === "string") {
    count = parseInt(count);
  }

  return new Array(count)
    .fill("")
    .map((_, index) => <Icon key={index} className="fas fa-clock"></Icon>);
};

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { FlexCardRow, FlexRow, Card, Section, TimeIcons, Center };
