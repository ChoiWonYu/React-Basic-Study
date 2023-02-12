import react from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import "./style/GlobalFont.css";
import Header from "./components/Header";
import { defaultTheme } from "./style/theme";
import { ThemeProvider } from "styled-components";
import Content from "./components/Content";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
