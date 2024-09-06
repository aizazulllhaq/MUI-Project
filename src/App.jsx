import React from "react";
import Feedback from "./Components/Feedback";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import { Box, Stack } from "@mui/material";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Box>
      <Navbar />
    <Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
      <Sidebar />
      <Feedback />
      <Rightbar />
    </Stack>
  </Box>
  );
};

export default App;
