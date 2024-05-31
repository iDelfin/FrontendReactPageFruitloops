import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import Header from "../../components/Header";
import FruteButton from "../../components/FruteButton";

const RegistroObjeto = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box
            justifyContent="center"
            align="center"
        >
            <FruteButton frutaTxt="Aguacate" urlOfIm="../../assets/AguacateNBXD.png"/>
            <FruteButton frutaTxt="Alcachofa" urlOfIm="../../assets/AlcachofaXD.png"/>
            <FruteButton frutaTxt="Apio" urlOfIm="../../assets/ApioXD.png"/>
            <FruteButton frutaTxt="Arándanos" urlOfIm="../../assets/ArandanosXD.png"/>
            <FruteButton frutaTxt="Berengena" urlOfIm="../../assets/BerengenaXD.png"/>
            <FruteButton frutaTxt="Brocoli" urlOfIm="../../assets/BrocoliXD.png"/>
            <FruteButton frutaTxt="Calabacín" urlOfIm="../../assets/CalabacinXD.png"/>
            <FruteButton frutaTxt="Carambola" urlOfIm="../../assets/CarambolaXD.png"/>
            <FruteButton frutaTxt="Cebolla" urlOfIm="../../assets/CebollaXD.png"/>
            <FruteButton frutaTxt="Cebolla Roja" urlOfIm="../../assets/CebollaRojaXD.png"/>
            <FruteButton frutaTxt="Chile Serrano" urlOfIm="../../assets/ChileSerranoXD.png"/>
            <FruteButton frutaTxt="Cilantro" urlOfIm="../../assets/CilantroXD.png"/>
            <FruteButton frutaTxt="Cereza" urlOfIm="../../assets/CherryXD.png"/>
            <FruteButton frutaTxt="Ciruela" urlOfIm="../../assets/CiruelaXD.png"/>
            <FruteButton frutaTxt="Coco" urlOfIm="../../assets/CocoQueMiedo.png"/>
            <FruteButton frutaTxt="Durazno" urlOfIm="../../assets/DuraznoEnHDXD.png"/>
            <FruteButton frutaTxt="Frambueza" urlOfIm="../../assets/FrambuesaXD.png"/>
            <FruteButton frutaTxt="Manzana" urlOfIm="../../assets/ManzanaXD.png"/>
            <FruteButton frutaTxt="Perejil" urlOfIm="../../assets/PerejilXD.png"/>
            <FruteButton frutaTxt="Tomate Bola" urlOfIm="../../assets/TomateBolaXD.png"/>
        </Box>
    );
};

export default RegistroObjeto;