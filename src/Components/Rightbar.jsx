import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import firstImg from "../assets/1st.jpg";
import secondImg from "../assets/2nd.jpg";
import thirdImg from "../assets/3rd.jpg";
import forthImg from "../assets/4th.jpg";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", md: "block" },
      }}
      p={2}
    >
      <Box
        position={"fixed"}
        sx={{
          width: 300, // Fixed width
          height: "100vh", // Full viewport height
          overflow: "auto",
          p: 2,
          boxSizing: "border-box",
          bgcolor: "background.paper", // Optional: to ensure background color is consistent
        }}
      >
        <Typography variant="h6" fontWeight={100} my={2}>
          Online Friends
        </Typography>
        <AvatarGroup
          max={5}
          total={7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar alt="Travis Howard" src={thirdImg} />
          <Avatar alt="Remy Sharp" src={secondImg} />
          <Avatar alt="Cindy Baker" src={forthImg} />
          <Avatar alt="Cindy Baker" src={firstImg} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={110}
          sx={{ overflow: "hidden", marginBottom: "20px" }}
        >
          <ImageListItem>
            <img
              src={
                "https://img.freepik.com/premium-photo/fantasy-anime-nature-wallpaper-background-image-ai-generated_590614-552.jpg"
              }
              alt={"Loading..."}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={
                "https://img.freepik.com/premium-photo/fantasy-anime-nature-wallpaper-background-image-ai-generated_590614-552.jpg"
              }
              alt={"Loading..."}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkHB7wXfIOv6VaTA3ThD-_rsrnEWDJugJE70YH3-ySidqdgovRjIzY9Cmh5k9OBytqQ4&usqp=CAU"
              }
              alt={"Loading..."}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOGC9_sshF7-uRK2GZ7vxSOeCIRUazYZHiYYghgKokZjKrS0t1pypa9gszz1Odxr4otQ&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  {" I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylFWvjmIFeaBAdjPnWfZ1_RpBpNUejf0Klbye85A9GsBZreip0E2wv66TuGV99X4O50c&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  {" Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
