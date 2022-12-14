import { Box, Card, CardMedia, styled, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CustomButton from '../components/CustomButton'
import Navbar from '../components/Navbar'
import backgroundCity from "../Images/city-palace.jpg"

const Header = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
        }
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "48px",
        color: "#fefefd",
        fontWeight: "inherit",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "26px",
        }
    }));

    return (
        <CardMedia image={backgroundCity} sx={{
            filter: "invert(60 %) sepia(6%) saturate(814 %) hue - rotate(179deg) brightness(91 %) contrast(90 %)",
            minHeight: "80vh"
        }}>
            <Container>
                <Navbar />
                <CustomBox>
                    <Title>
                        A Powerful Influencer Marketing
                        Platform for Advertisers

                    </Title>
                    <Box >
                        <CustomButton
                            backgroundColor="#ea6e9f"
                            color="#fefefd"
                            buttonText="STAR YOUR FREE TRIAL"
                        />
                    </Box>

                </CustomBox>
            </Container>
        </ CardMedia >
    )
}

export default Header