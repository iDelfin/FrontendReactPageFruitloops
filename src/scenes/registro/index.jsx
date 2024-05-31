import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import Header from "../../components/Header";
import LogInForm from "../../components/LogInForm";

const Registro = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box>
            <Box>
                <LogInForm/>
            </Box>
        </Box>
    );
};

export default Registro;