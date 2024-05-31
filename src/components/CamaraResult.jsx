import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

import React, {useRef, useEffect, useState} from "react";

const CamaraResult = (photoRef) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [setHasPhoto] = useState(false);

    /*
    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContex('2d');

        ctx.clearReact(0, 0, photo.width, photo.height)

        setHasPhoto(false);
    }
    */


    return(
        <Box mb="30px">
            <canvas ref={photoRef}></canvas>
            <button
                sx={{ 
                    backgroundColor: colors.blueAccent[700],
                    alignSelf: "center",
                    alignContent: "center", 
                    borderRadius: "15px",
                    m: "10px",
                    boxShadow: 15,
                    width: '800px',
                    height: 75,
                }}
            >
                <Typography>Again!!</Typography>
            </button>
        </Box>
    )
}

export default CamaraResult;