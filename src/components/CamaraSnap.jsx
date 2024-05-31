import { Typography, Box, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";

import React, {useRef, useEffect, useState} from "react";

import CamaraResult from "./CamaraResult";



const CamaraSnap = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width:224, height: 224 } })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error(err);
        })
    }
    
    const takePhoto = () => {
        const width = 224;
        const height = 224;

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        localStorage.setItem('recent-image', video)
        //setUrl(localStorage.getItem('recent-image'))
        setHasPhoto(true);
    }
    
    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        ctx.clearRect(0, 0, photo.width, photo.height)

        setHasPhoto(false);
    }
    

    useEffect(() => {
        getVideo();
    }, [videoRef])

    return(
        <Box
            display="flex"
        >
            <div className={"camara " + (hasPhoto ? '' : 'hasPhoto')}>
                <video ref={videoRef}></video>
                <Button
                    onClick={takePhoto}
                    sx={{ 
                        backgroundColor: colors.blueAccent[600],
                        alignSelf: "center",
                        alignContent: "center", 
                        borderRadius: "15px",
                        boxShadow: 15,
                        width: '300px',
                        height: 75,
                    }}
                >
                    SNAP!
                </Button>
            </div>
            <div className={'result ' + (hasPhoto ? 'hasPhoto' : '')}
            sx={{
                position: "fixed",
                top: 0,
                left: "100%",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                transition: "0.4s"
            }}
            >
                <canvas 
                sx={{
                    width: "auto"
                }}
                ref={photoRef}></canvas>
                <Button
                    onClick={closePhoto}
                    sx={{ 
                        backgroundColor: colors.blueAccent[600],
                        alignSelf: "center",
                        alignContent: "center", 
                        borderRadius: "15px",
                        boxShadow: 15,
                        width: '300px',
                        height: 75,
                    }}
                >
                    Again!
                </Button>
            </div>
        </Box>
    );
}

export default CamaraSnap;