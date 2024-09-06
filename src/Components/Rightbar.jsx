import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      bgcolor={"gray"}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      p={2}
    >
      rightbar
    </Box>
  );
};

export default Rightbar;
