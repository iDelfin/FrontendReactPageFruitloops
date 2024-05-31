import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React, { useState } from 'react';

const DropDownMenuArea = ({ onOptionSelect }) => {
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
        <Box>
            <select id="dropdown" value={selectedOption} onChange={handleChange} style={selectStyle}>
                <option value="" style={optionStyle}>Area ▼</option>
                <option value="option1" style={optionStyle}>Cocina</option>
                <option value="option3" style={optionStyle}>Inventario</option>
                <option value="option2" style={optionStyle}>Limpieza</option>
                <option value="option3" style={optionStyle}>Recepcion</option>

            </select>
        </Box>
    );
};

export default DropDownMenuArea;