import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Typography from "typography";
import typographyTheme from "typography-theme-doelger";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import "@fortawesome/fontawesome-free/css/all.css";
import { MDXProvider } from "@mdx-js/react";
import "animate.css";

import { Center } from "./components";

import Content from "./content.mdx";

// typographyTheme.headerFontFamily = ["Arial"];
typographyTheme.bodyFontFamily = ["Arial"];
typographyTheme.headerWeight = "bolder";
typographyTheme.bodyWeight = "bold";
typographyTheme.boldWeight = "bolder";
typographyTheme.baseFontSize = "20px";

const typography = new Typography(typographyTheme);

typography.injectStyles();

const Main = styled.main`
  margin: 0 auto;
  max-width: 900px;
`;

const theme = {
  colors: {
    light: "#fcdeea",
    accent: "#ff758f",
    dark: "#012824",
    middle: "#83d69b",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.light};
  }
`;

const PointerIcon = styled.i`
  margin-right: 8px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
`;

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const listener = () => {
      setCurrentIndex(currentIndex + 1);
    };

    document.addEventListener("click", listener);

    return () => document.removeEventListener("click", listener);
  }, [currentIndex]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <MDXProvider
          components={{
            wrapper: ({ children }) => {
              const revealed = React.Children.toArray(children).slice(
                0,
                currentIndex
              );

              console.log(revealed);
              console.log(
                revealed.map(
                  (child) => child.props.children && child.props.children.length
                )
              );

              revealed[revealed.length - 1] = React.cloneElement(
                revealed[revealed.length - 1],
                {
                  className:
                    "animate__animated animate__fadeIn animate__faster",
                }
              );

              return (
                <>
                  {revealed}{" "}
                  {currentIndex < children.length && (
                    <Footer>
                      <Center className="animate__animated animate__pulse animate__infinite">
                        <br />
                        <PointerIcon className="far fa-hand-pointer"></PointerIcon>
                        click to progress
                      </Center>
                    </Footer>
                  )}
                </>
              );
            },
          }}
        >
          <GlobalStyle />
          <Main>
            <Content />
          </Main>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
