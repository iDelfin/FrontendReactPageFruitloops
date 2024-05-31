import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React, { useState } from 'react';

const StatusMaturnesBox = ({isMature = true, textMaturenes = "N/A", isSelected = false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const selectStyle = {
        width: '200px',
        padding: '5px',
        border: '0px solid #ccc',
        borderRadius: '8px',
        backgroundColor: colors.greenAccent[200],
        color: colors.grey[200],
        fontSize: '15px',
        //textAlign: 'center',
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

    const numberColor = isSelected?500:300

    return (
        <Box
            borderRadius='15px'
            height='280px'
            width='500px'
        >
            <Typography color={colors.grey[100]} variant="h3" fontWeight="600px" align="center" mb="20px">
                {textMaturenes}
            </Typography>
        </Box>
    );
};

export default StatusMaturnesBox;