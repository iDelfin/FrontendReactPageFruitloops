import React, { useState } from 'react';
import { Box, Typography, IconButton, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search"
import DropdownMenuArea from "./DropDownMenuArea";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"

const FruteButton = ({ frutaTxt = "N/A", urlOfIm = '../../assets/MeNB.png' }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Button
            sx={{ 
                backgroundColor: colors.blueAccent[700],
                alignContent: "center", 
                borderRadius: "15px",
                m: "10px",
                boxShadow: 15,
                width: 300,
                height: 200,
            }}
            href="/DetectionMenuOut"         
        >
            <Box
                alignContent="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Box>
                    <img
                        width="150px"
                        hight="150px"
                        src={ urlOfIm }
                        style={{ cursor: "pointer", borderRadius: "50%"}}
                    />
                </Box>
                <Box
                    align="center"
                >
                    <Typography variant='h5' color={colors.grey[100]} fontWeight="bold"> { frutaTxt } </Typography>
                </Box>
            </Box>
        </Button>
    );
};

export default FruteButton;