import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import backgroundCity from "../Images/city-palace.jpg"

const Header = () => {
    return (
        <Box sx={{
            backgroundColor: "#E6F0FF", minHeight: "80vh"
        }}>
            <Navbar />
        </Box>
    )
}

export default Header