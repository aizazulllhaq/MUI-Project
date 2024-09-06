import React, { useState } from "react";
import Feedback from "./Components/Feedback";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import { Box, createTheme, Stack } from "@mui/material";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
          <Sidebar mode={mode} setMode={setMode} />
          <Feedback />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
