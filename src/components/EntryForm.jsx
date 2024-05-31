import { Box, Typography, IconButton, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search"

const EntryForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
                        Cebolla
                    </Typography>
                </Box>
                <Box>
                    <img
                        width="150px"
                        hight="150px"
                        src={'../../assets/cebollaXD.png'}
                        style={{ cursor: "pointer", borderRadius: "50%"}}
                    />
                </Box>

                <Typography color={colors.blueAccent[500]} variant="h4" fontWeight="500px" align="center" mt="50px">
                    Peso de la orden
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
                    <InputBase sx={{ml: 1, flex: 1 }} placeholder="Peso" align="center" justifyContent="center" color={colors.grey[100]} />
                    <Typography variant="h8">
                        KG
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    alignItems="center" 
                    justifyContent="center"
                    width="200px"
                    backgroundColor={colors.primary[600]}
                    borderRadius="8px"
                    mt="10px"
                >
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
                    /* href="/RegistroObjeto" */
                >
                    Entrada
                </Button>

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
                    /* href="/RegistroObjeto" */
                >
                    Salida
                </Button>
            </Box>
        </Box>
    );
};

export default EntryForm;