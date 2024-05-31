import { Box, Typography, IconButton, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search"
import Header from "./Header";

const EntryForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box
            align="center"
        >
            <Box
                display="flex"
                justifyContent="space-between"
                p={2}
                //idk
            >
                <Box
                    borderRadius='15px'
                    m="20px"
                    display="flex"
                >
                    <Header title="Bienvenidos" subtitle="Al sistema de predicción" />
                </Box>
                <Box
                    display="flex"
                >
                    <Typography color={colors.grey[200]} variant='h7' align='center'>
                        Developed by:
                    </Typography>
                    <img
                        alt="logo-InAI"
                        width="100px"
                        hight="100px"
                        src={'../../assets/InAILightNB.png'}
                        style={{ cursor: "pointer", borderRadius: "50%"}}
                    />
                </Box>
            </Box>

            <Box
                alignContent="center"
            >
                <Typography variant="h1" color={colors.blueAccent[500]} fontWeight="bold" align="center">
                        Material
                </Typography>
                <Box
                    backgroundColor={colors.primary[600]}
                    width="800px"
                    height="100px"
                    borderRadius="15px"
                    mt="15px"
                    mb="25px"
                >
                    <Typography variant="h3" color={colors.greenAccent[500]} fontWeight="bold" align="center">
                        Introducir material a predecir
                    </Typography>
                    <Box
                        backgroundColor={colors.grey[800]}
                        align="center"
                        borderRadius="15px"
                        m="20px"
                        ml="150px"
                        mr="150px"
                    >
                        <InputBase placeholder="Material" backgroundColor={colors.grey[300]}/>
                    </Box>
                </Box>
                <Typography variant="h1" color={colors.blueAccent[500]} fontWeight="bold" align="center">
                        Semana
                </Typography>
                <Box
                    backgroundColor={colors.primary[600]}
                    width="800px"
                    height="100px"
                    borderRadius="15px"
                    mt="15px"
                    mb="25px"
                >
                    <Typography variant="h3" color={colors.greenAccent[500]} fontWeight="bold" align="center">
                        Introducir semana a predecir
                    </Typography>
                    <Box
                        backgroundColor={colors.grey[800]}
                        align="center"
                        borderRadius="15px"
                        m="20px"
                        ml="150px"
                        mr="150px"

                    >
                        <InputBase placeholder="Semana" backgroundColor={colors.grey[300]}/>
                    </Box>
                </Box>
                <Typography variant="h1" color={colors.blueAccent[500]} fontWeight="bold" align="center">
                        Cuartos ocupados
                </Typography>
                <Box
                    backgroundColor={colors.primary[600]}
                    width="800px"
                    height="100px"
                    borderRadius="15px"
                    mt="15px"
                    mb="25px"
                >
                    <Typography variant="h3" color={colors.greenAccent[500]} fontWeight="bold" align="center">
                        Introducir los cuartos ocupados
                    </Typography>
                    <Box
                        backgroundColor={colors.grey[800]}
                        align="center"
                        borderRadius="15px"
                        m="20px"
                        ml="150px"
                        mr="150px"
                    >
                        <InputBase placeholder="Cuartos" backgroundColor={colors.grey[300]}/>
                    </Box>
                </Box>
                <Button
                    sx={{ 
                        backgroundColor: colors.greenAccent[500], 
                        colors: colors.grey[100],
                        fontSize: "14px", 
                        fontWeight: "bold", 
                        padding: "10px 30px",
                        mt: "20px",
                        m: "5px",
                    }}
                    href="/Predictiongraph"
                >
                    Predecir!!!
                </Button>
            </Box>
        </Box>
    );
};

export default EntryForm;