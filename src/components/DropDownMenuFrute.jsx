import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React, { useState } from 'react';

const DropDownMenuFrute = ({ onOptionSelect }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        const option = event.target.value;
        setSelectedOption(option);
        onOptionSelect(option); // Pass the selected option to the parent component
      };

    const dropdownStyle = {
        position: 'relative',
        display: 'inline-block'
    };

    const selectStyle = {
        width: '700px',
        padding: '20px',
        border: '0px solid #ccc',
        borderRadius: '15px',
        backgroundColor: (colors.grey[300]),
        fontSize: '25px',
        textAlign: 'center',
        outline: 'none',
        appearance: 'none',
        MozAppearance: 'none',
        WebkitAppearance: 'none'
    };

    const optionStyle = {
        padding: '10px',
        backgroundColor: '#3da58a',
        color: '#333'
    };

    return (
        <Box>
            <select id="dropdown" value={selectedOption} onChange={handleChange} style={selectStyle}>
                <option value="">Material que se usará ▼</option>
                <option value="option1">Aguacate Hass ▼</option>
                <option value="option2">Tomate Supremo ▼</option>
                <option value="option3">Uva verde ▼</option>
            </select>
        </Box>
    );
};

export default DropDownMenuFrute;