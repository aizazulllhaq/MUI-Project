import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import {
  Mail,
  NotificationAdd,
  Menu as MenuBar,
  List,
  Pets,
} from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "0px 10px",
  width: "40%",
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.primary, // Change the color based on theme
  },
  boxShadow:"1px 1px 10px 1px gray"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = ({ Sidebar, setSideBar }) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" bgcolor={"background.default"} color={"text.primary"}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
        𝙼-𝚔𝚕𝚘𝚞𝚍𝚜
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search sx={{ borderRadius: "5px" }}>
          <InputBase placeholder="search..." />
        </Search>
        {/* sm > user detail  */}
        <Icons>
          <Badge badgeContent={2} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationAdd />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={
              "https://pics.craiyon.com/2024-05-31/O4HnksVxTeej3N6FShhjcw.webp"
            }
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        {/* sm < user detail  */}
        <UserBox>
          {Sidebar ? (
            <List onClick={(e) => setSideBar(false)} />
          ) : (
            <MenuBar onClick={(e) => setSideBar(true)} />
          )}
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={
              "https://pics.craiyon.com/2024-05-31/O4HnksVxTeej3N6FShhjcw.webp"
            }
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">Aizaz</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
