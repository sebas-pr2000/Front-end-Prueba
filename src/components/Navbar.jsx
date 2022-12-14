import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContactsIcon from "@mui/icons-material/Contacts";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import logoImg from "../Images/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
} from "@mui/material";
import { useState } from "react";

const Navbar = () => {

    // Estado para activar vista celular / iconos
    const [mobileMenu, setMobileMenu] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")) {
            return;
        }
        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[{ name: "Features", link: "/" }, { name: "Pricing", link: "/" }, { name: "About", link: "/" }, { name: "Contact", link: "/" }, { name: "Login", link: "/" }, { name: "Sing-Up", link: "https://www.google.com/" }].map(
                    (elem, index) => (
                        <ListItem key={elem.name} disablePadding>
                            <a href={elem.link} style={{
                                textDecoration: "none",
                                color: "#000"

                            }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index === 0 && <FeaturedPlayListIcon />}
                                        {index === 1 && < AttachMoneyIcon />}
                                        {index === 2 && <InfoIcon />}
                                        {index === 3 && <ContactsIcon />}
                                        {index === 4 && < LoginIcon />}
                                        {index === 5 && < AppRegistrationIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={elem.name} />
                                </ListItemButton>
                            </a>
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );


    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "#fefefd",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            borderBottom: "2px solid #ea6e9f",
            color: "#fefefd",
        }
    }));

    const NavbarLinksBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none"
        },
    }));

    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block"
        }
    }));

    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
    }));

    const NavbarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        // [theme.breakpoints.down("md")]: {
        //     display: "none",
        // },
    }));

    return (
        <NavbarContainer>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <NavbarLogo src={logoImg} alt="logo" />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CustomMenuIcon onClick={toggleDrawer("right", true)} />
                    <Drawer
                        anchor="right"
                        open={mobileMenu["right"]}
                        onClose={toggleDrawer("right", false)}
                    >
                        {list("right")}
                    </Drawer>
                </Box>

                <NavbarLinksBox>
                    <NavLink variant="body2">FEATURES</NavLink>
                    <NavLink variant="body2">PRICING</NavLink>
                    <NavLink variant="body2">ABOUT</NavLink>
                    <NavLink variant="body2">CONTACT</NavLink>
                    <div style={{
                        width: "5%",
                        height: "20px",
                        borderRight: "2px solid #000",
                    }}></div>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                    }}>
                        <NavLink variant="body2">lOGIN</NavLink>
                        <CustomButton
                            backgroundColor="#ea6e9f"
                            color="#fefefd"
                            buttonText="SIGNUP"
                        />
                    </Box>
                </NavbarLinksBox>
            </Box>


        </NavbarContainer >
    )
};

export default Navbar