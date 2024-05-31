import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React, { useState } from 'react';

import CamaraSnap from "./CamaraSnap";

const DetectionScreen = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const selectStyle = {
        width: '200px',
        padding: '5px',
        border: '0px solid #ccc',
        borderRadius: '8px',
        backgroundColor: colors.primary[500],
        color: colors.grey[100],
        fontSize: '15px',
        textAlign: 'center',
        outline: 'none',
        appearance: 'none',
        MozAppearance: 'none',
        WebkitAppearance: 'none'
    };

    const optionStyle = {
        padding: '10px',
        backgroundColor: colors.primary[500],
        color: colors.grey[100]
    };

    return (
        <Box
            align = "center"
        >
            <Box
                alignItems="center"
                backgroundColor={colors.primary[800]}
                borderRadius='15px'
                height='500px'
                width='800px'
            >
                <Box
                    display="grid"
                    alignItems="center"
                    alignSelf="center"
                    borderRadius='15px'
                    height='500px'
                    width='500px'
                >
                    <CamaraSnap/>
                </Box>
            </Box>
        </Box>
    );
};

export default DetectionScreen;