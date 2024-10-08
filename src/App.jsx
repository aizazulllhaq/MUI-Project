import React, { useEffect, useState } from "react";
import Feedback from "./Components/Feedback";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import { Box, createTheme, Stack } from "@mui/material";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const [mode, setMode] = useState("dark");
  const [sideBar, setSideBar] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setSideBar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} Sidebar={sideBar} setSideBar={setSideBar} />
        <Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
          <Sidebar
            mode={mode}
            setMode={setMode}
            Sidebar={sideBar}
            setSideBar={setSideBar}
          />
          <Feedback />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
