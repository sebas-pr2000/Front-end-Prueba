import React from 'react';
import { Box, Button, styled, Typography } from "@mui/material";



const Mission = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        width: "60%",
        [theme.breakpoints.down("md")]: {
            width: "85%"
        }
    }));
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div
                style={{
                    width: "5%",
                    height: "5px",
                    backgroundColor: "#000",
                    margin: "0 auto",
                }}
            ></div>

            <Typography
                variant="h3"
                sx={{
                    fontSize: "35px",
                    fontWeight: "inherit",
                    color: "#2a374b",
                    my: 3
                }}
            >
                Our Mission
            </Typography>
            <CustomBox>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: "16px",
                        color: "#7D8589",
                        textAlign: "center",
                    }}
                >
                    Founded in 2014, Achoo believes that influencers including bloggers, are the best digital
                    marketing channel. We help advertisers to engage and execute efficient influencer mar-
                    keting strategies. Our digital platform with turnkey analytics and reporting features based
                    on real-time influencer data provides advertisers overview and transparency into the
                    vastly unstructured influencer market,

                </Typography>
            </CustomBox>
        </Box >
    )
}

export default Mission