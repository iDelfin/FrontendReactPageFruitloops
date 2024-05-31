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
import LineChart00 from "../../components/LineCharts/LineChart00";
import LineChart01 from "../../components/LineCharts/LineChart01"
import LineChart02 from "../../components/LineCharts/LineChart02"
import LineChartAll from '../../components/LineCharts/LineChartAll';
import BarChart from "../../components/BarCharts/BarChart00";
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";
import EntryForm from "../../components/EntryForm";
import ProgressCircle from "../../components/ProgressCircle";
import DropdownMenu from "../../components/DropDownMenuFrute";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        // Use the selected option value in your logic
        console.log('Selected option:', option);
        // You can also perform any other actions or updates based on the selected option
    };

    function useOfGraph(optionUsed) {
        if (optionUsed == 'option1')
        {
            return <LineChart00 isDashboard={true} />; 
        }
        return <LineChart01 isDashboard={true} />;
    }

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>

                <Box>
                    <DropdownMenu onOptionSelect={handleOptionSelect} />
                </Box>

                <Box>
                    <Button
                        sx={{ 
                            backgroundColor: colors.blueAccent[700], 
                            colors: colors.grey[100],
                            fontSize: "14px", 
                            fontWeight: "bold", 
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px"}} />
                        Apply Changes
                    </Button>
                </Box>
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
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="325 KG"
                        subtitle="Tamaño de orden"
                        progress="1"
                        increase="+5%"
                        icon={
                            <EmailIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                {/* Grafica lineal */}
                <Box
                    gridColumn="span 8"
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
                            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                                PROMEDIO DE PERDIDA
                            </Typography>
                            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                                5
                            </Typography>
                        </Box>

                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>

                    <img
                        alt="EOQGraph"
                        src={'../../assets/GraficaEOQXD.png'}
                        style={{ cursor: "pointer", borderRadius: "50%"}}
                    />
                </Box>

                {/* Row 3 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 1"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="112 KG"
                        subtitle="Punto de Reorden"
                        progress="0.50"
                        increase="-2%"
                        icon={
                            <EmailIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        Stock de seguridad
                    </Typography>
                    <Box 
                        display="flex" 
                        flexDirection="column"
                        alignItems="center" 
                        mt="25px"
                    >
                        <ProgressCircle 
                            progress="0.80"
                            size="125"
                        />
                        <Typography 
                            variant="h5" 
                            color={colors.greenAccent[500]} 
                            sx={{ mt: "15px"}}
                        >
                            50 KG
                        </Typography>
                        {/* hmmmmm */}
                        <Typography>Stock de seguridad de esta orden</Typography>
                    </Box>
                </Box>
                {/* */}
            </Box>
        </Box>
    );
};

export default Dashboard;