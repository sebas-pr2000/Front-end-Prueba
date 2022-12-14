import React from 'react'
import { Box, styled, Typography, Stack } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";


const People = ({ id, img, name, position, twitter }) => {
    const PeopleBox = styled(Box)(({ theme }) => ({
        width: "340px",
        backgroundColor: "#fff",
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
            margin: theme.spacing(2, 0, 2, 0),
        }
    }));

    const InfoBox = styled(Box)(() => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }));

    const ImgContainer = styled(Box)(() => ({
        width: "100%"
    }));

    return <PeopleBox>
        <ImgContainer>
            <img src={img} alt="house Photo" style={{ width: "200px" }} />
        </ImgContainer>

        <Box sx={{
            padding: "1rem",
            textAlign: "start"
        }}>
            <Typography variant="body2" sx={{
                fontWeight: "700",
            }}>
                {name}
            </Typography>
            <Typography variant="body2" sx={{ my: 2, borderBottom: "1px solid #5A6473", pb: "8px" }}>
                {position}
            </Typography>

            <Stack direction={"row"} spacing={2}>
                <TwitterIcon
                    sx={{
                        color: "#1da1f2",
                    }}
                />
                <Typography>@{twitter}</Typography>
            </Stack>

            {/* <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <InfoBox>
                    <img src={bedroomsIcon} alt="bedroomsIcom" />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {bedrooms}
                    </Typography>
                </InfoBox>

                <InfoBox>
                    <img src={bathroomsIcon} alt="bathroomsIcon" />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {bathrooms}
                    </Typography>
                </InfoBox>
                <InfoBox>

                    <img src={spaceIcon} alt="spaceIcon" />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {space}
                    </Typography>
                </InfoBox>

            </Box> */}
        </Box>
    </PeopleBox>;
};

export default People