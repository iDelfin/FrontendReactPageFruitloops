import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import PieChart from "../../components/EntryForm";
import PrediccionForm from "../../components/PrediccionForm";

const Prediccion = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box>
            <Box
                m="10px" 
                height="75vh"
            >
                <PrediccionForm />
            </Box>

        </Box>
    );
};

export default Prediccion;