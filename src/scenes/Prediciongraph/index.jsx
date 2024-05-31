import React, { useState } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../Data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import LineChartPredict from "../../components/LineCharts/LineChartPredict";
import BarChart from "../../components/BarCharts/BarChart00";
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";
import EntryForm from "../../components/EntryForm";
import ProgressCircle from "../../components/ProgressCircle";
import DropdownMenu from "../../components/DropDownMenuFrute";

const LinePrediccion = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="PREDICCION" subtitle="Su prediccion del Aguacate Hass de la semana 21"/>

            </Box>

            {/* Grid & Chart */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"

            >
                { /* ROW 1 */}
                <Box
                    gridColumn="span 6"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant='h2' fontWeight="bold" color={colors.greenAccent[500]}>
                        AGUACATE
                    </Typography>
                    <img
                        width="100px"
                        hight="100px"
                        src="../../assets/AguacateNBXD.png"
                        style={{ cursor: "pointer", borderRadius: "50%"}}
                    />
                </Box>
                <Box
                    gridColumn="span 6"
                    gridRow="span 1"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="1159 KG"
                        subtitle="Prediccion de orden"
                        progress="0.75"
                        increase="+0.7%"
                        icon={
                            <ReceiptOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                {/* Grafica lineal */}
                <Box
                    gridColumn="span 12"
                    gridRow="span 4"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>

                    <LineChartPredict isDashboard={true}/>
                </Box>
                {/* */}
            </Box>
        </Box>
    );
};

export default LinePrediccion;