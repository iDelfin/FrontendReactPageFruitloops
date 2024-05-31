import React, { useState } from 'react';
import { Box, Typography, IconButton, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search"
import DropdownMenuArea from "./DropDownMenuArea";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"

const LogInForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        // Use the selected option value in your logic
        console.log('Selected option:', option);
        // You can also perform any other actions or updates based on the selected option
    };

    return(
        <Box
            align="center"
        >
            <Box
                alignItems="center"
                backgroundColor={colors.primary[800]}
                borderRadius='15px'
                height='500px'
                width='500px'
            >
                <Box
                    align="center"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography color={colors.grey[100]} variant="h3" fontWeight="600px" align="center" mb="20px">
                        Inicio de sessión
                    </Typography>
                </Box>
                <Box>
                    <Typography color={colors.greenAccent[500]} variant='h7' align='center'>
                        Developed by:
                    </Typography>
                    <img
                        alt="logo-InAI"
                        width="150px"
                        hight="150px"
                        src={'../../assets/InAILightNB.png'}
                        style={{ cursor: "pointer", borderRadius: "50%"}}
                    />
                </Box>

                <Typography color={colors.blueAccent[500]} variant="h4" fontWeight="500px" align="center" mt="50px">
                    Nombre de encargado
                </Typography>
                <Box
                    display="flex"
                    alignItems="center" 
                    justifyContent="center"
                    width="200px"
                    backgroundColor={colors.primary[600]}
                    borderRadius="8px"
                    mt="10px"
                >
                    <PersonOutlinedIcon sx={{ml:1}}/>
                    <InputBase sx={{ml: 1, flex: 5 }} placeholder="Nombre" align="center" justifyContent="center" color={colors.grey[100]} />
                </Box>

                <Typography color={colors.blueAccent[500]} variant="h4" fontWeight="500px" align="center" m="5px">
                    Area
                </Typography>
                <Box
                    display="flex"
                    alignItems="center" 
                    justifyContent="center"
                    width="200px"
                    backgroundColor={colors.primary[600]}
                    borderRadius="8px"
                    mt="10px"
                >
                    <DropdownMenuArea onOptionSelect={handleOptionSelect}/>
                </Box>

                <Button
                    sx={{ 
                        backgroundColor: colors.greenAccent[500], 
                        colors: colors.grey[100],
                        fontSize: "14px", 
                        fontWeight: "bold", 
                        padding: "10px 20px",
                        mt: "20px",
                    }}
                    href="/RegistroObjeto"
                >
                    Login
                </Button>
            </Box>
        </Box>
    );
};

export default LogInForm;