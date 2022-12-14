import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../Images/fbicon.png";
import twitterIcon from "../Images/twittericon.png";
import linkedinIcon from "../Images/linkedinicon.png";

const Footer = () => {

    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    }));

    const IconBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
        },
    }));

    const FooterLink = styled("span")(({ theme }) => ({
        display: "block",
        fontSize: "16px",
        color: "#7D8589",
        fontWeight: "500",
        marginBottom: "1px",
        cursor: "pointer",
        "&:hover": {
            color: "#000",
            borderBottom: "1px solid #000",
        },
    }));


    return (
        <Box sx={{ pt: 0, pb: 8 }}>
            <CustomContainer>
                <CustomContainer>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: "#1C1C1D",
                                fontWeight: "700",
                                mb: 3,
                            }}
                        >
                            Achoo
                        </Typography>

                        <FooterLink>Home</FooterLink>
                        <br />
                        <FooterLink>Features</FooterLink>
                        <br />
                        <FooterLink>Pricing</FooterLink>
                        <br />
                        <FooterLink>About Us</FooterLink>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: "#1C1C1D",
                                fontWeight: "700",
                                mb: 3,
                            }}
                        >
                            Support
                        </Typography>

                        <FooterLink>Help & Support</FooterLink>
                        <br />
                        <FooterLink>Privacity Policy</FooterLink>
                        <br />
                        <FooterLink>Contatc Us</FooterLink>
                        <br />
                        <FooterLink>Sign Up</FooterLink>
                        <br />
                        <FooterLink>log In</FooterLink>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: "#1C1C1D",
                                fontWeight: "700",
                                mb: 2,
                            }}
                        >
                            Contact Us
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "16px",
                                color: "#7A7A7E",
                                fontWeight: "400",
                                mb: 2,
                            }}
                        >
                            Anchoo ApS.<br />
                            DannesKiold-Samsoes Alle 41<br />
                            1434 Copebhagen K<br />
                            Denmark<br /><br />
                            Tel +45 24 47 48 78

                        </Typography>
                        <IconBox>
                            <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
                            <img
                                src={twitterIcon}
                                alt="twitterIcon"
                                style={{ cursor: "pointer" }}
                            />
                            <img
                                src={linkedinIcon}
                                alt="linkedinIcon"
                                style={{ cursor: "pointer" }}
                            />
                        </IconBox>
                    </Box>
                </CustomContainer>
            </CustomContainer>
        </Box >
    );
};
export default Footer;
