import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import CustomButton from "../components/CustomButton";

const GetStarted = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        backgroundColor: "#ea6e9f",
        height: "120px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            height: "auto",
            flexDirection: "column",
            alignItems: "center",
            padding: theme.spacing(3, 3, 0, 3),
            width: "100%",
        }
    }));

    const CustomBox = styled(Box)(({ theme }) => ({
        padding: theme.spacing(10, 0, 10, 0),
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
            padding: "0",

        }
    }));

    return <CustomBox>
        <CustomContainer>

            <Typography
                sx={{
                    fontSize: "16px",
                    color: "#fefefd",
                    my: 3,
                    textAlign: "center"
                }}>
                No obligations or contracts. Achoo influencer Platform is avaliable ti all advertisers
            </Typography>

            <CustomButton
                backgroundColor="#fefefd"
                color="#d85783"
                buttonText="Get Started Now"
                getStartedBtn={true}
            />
        </CustomContainer>
    </CustomBox >;
};

export default GetStarted;
