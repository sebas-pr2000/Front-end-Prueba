import React from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import { display } from '@mui/system';
import { peoplesInfo } from '../Constans/peoples';
import People from '../components/People';

const PeopleContainer = () => {

    const PeopleBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center"
        }
    }));

    const CustomBox = styled(Box)(({ theme }) => ({
        width: "60%",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            width: "85%"
        }
    }))


    return (
        <Box sx={{
            mt: 12,
            backgroundColor: "#eef2f5",
            py: 10
        }}>
            <Container sx={{
                textAlign: "center",
                display: 'flex',
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
                    Our People
                </Typography>
                <CustomBox>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "16px",
                            color: "#7D8589",
                            textAlign: "center",
                        }}
                    >
                        Behind Achoo is a dedicated team of digital marketing experts,
                        client-focused relationship managers, data nerds and bloggers
                        whose ambition is helping clients achieve awesome influencer
                        marketing results.
                    </Typography>
                </CustomBox>
                <PeopleBox>

                    {peoplesInfo.map((people) => (
                        <People
                            key={people.id}
                            img={people.img}
                            name={people.name}
                            position={people.position}
                            twitter={people.twitter}
                        />
                    ))}
                </PeopleBox>
            </Container>

        </Box >
    )
}

export default PeopleContainer;