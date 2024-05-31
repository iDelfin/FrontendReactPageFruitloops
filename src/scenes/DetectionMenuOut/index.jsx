import { Box, Button, Typography, useTheme, Switch } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import Header from "../../components/Header";
import DetectionScreen from "../../components/DetectionScreen";
import ButtonAddCart from "../../components/ButtonAddCart";
import StatusMaturnesBox from "../../components/StatusMaturnesBox";
import CamaraSnap from "../../components/CamaraSnap";
import { useState } from "react";

const DetectionMenuOut = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [checked, setChecked] = useState(null)

    return(
        <Box>
            <Box
                display="flex"
                justifyContent="space-between"
            >
            <Box/>
                <Box>
                    {checked ? 
                        <DetectionScreen/>
                        :
                        <ButtonAddCart/>
                    }
                </Box>
                <Box
                justifyContent="right"
                alignItems="right"
                >
                    <Typography fontFamily="Helvetica Neue" variant="h4" component="label" endDecorator={<Switch checked={checked} onChange={(event) => setChecked(event.target.checked)} color="secondary"/>}>
                        Use camara
                    </Typography>
                    <Switch
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        color="secondary"/>
                </Box>
                {/*<Box>
                </Box>*/}
            </Box>
            <Box
                //display="ce"
                justifyContent="center"
            >
            </Box>
        </Box>
    );
};

export default DetectionMenuOut;