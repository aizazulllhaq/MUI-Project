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
import azPic from "../assets/az.jpeg";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: "none", md: "block" } }} p={2}>
      <Box position={"fixed"} overflow={"auto"}>
        <Typography variant="h6" fontWeight={100} my={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={8} total={10}>
          <Avatar alt="Remy Sharp" src={azPic} />
          <Avatar alt="Travis Howard" src={azPic} />
          <Avatar alt="Cindy Baker" src={azPic} />
          <Avatar alt="Agnes Walker" src={azPic} />
          <Avatar alt="Cindy Baker" src={azPic} />
          <Avatar alt="Travis Howard" src={azPic} />
          <Avatar alt="Trevor Henderson" src={azPic} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={110}  sx={{ overflow: "hidden",marginBottom:"20px"}}>
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
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
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
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3zFwWdKtddOIOjrhjqW2LAdKvrj_Ikfa-nEkRSwIvG3AywxOl4DwiwOnpkZbH71o4es&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
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
