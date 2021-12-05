import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider, Paper } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const [colorTheme, setcolorTheme] = useState("light");

  const theme = createTheme({
    palette: {
      type: colorTheme,
    },
  });

  const toggleTheme = async (theme) => {
    await setcolorTheme(theme);
    console.log("theme: ", theme);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar setcolorTheme={setcolorTheme} />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
