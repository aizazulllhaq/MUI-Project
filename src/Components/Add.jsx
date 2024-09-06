import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideocamOutlined,
} from "@mui/icons-material";

const StyledModel = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
          zIndex: 50,
          opacity: { xs: "0.8", md: 10 },
        }}
      >
        <IconButton>
          <Fab color={"primary"} aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>

      <StyledModel
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ width: { xs: 250, md: 400 }, height: { xs: 260, md: 280 } }}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={2}
        >
          <Typography variant="h6" color="gray" textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={"https://p1.hiclipart.com/preview/633/241/287/student-software-developer-computer-programming-programming-language-computer-software-python-source-code-comment-png-clipart.jpg"} alt="" />
            <Typography variant="span">Aizaz Ul haq</Typography>
          </UserBox>
          <TextField
            multiline
            rows={3}
            placeholder="What's on your mind?"
            sx={{ width: "100%" }}
            variant={"standard"}
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideocamOutlined color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModel>
    </div>
  );
};

export default Add;
