import React, { useState } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../Data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import LineChart00 from "../../components/LineCharts/LineChart00";
import LineChart01 from "../../components/LineCharts/LineChart01"
import LineChart02 from "../../components/LineCharts/LineChart02"
import LineChartAll from '../../components/LineCharts/LineChartAll';
import BarChart00 from "../../components/BarCharts/BarChart00"
import BarChart01 from "../../components/BarCharts/BarChart01"
import BarChart02 from "../../components/BarCharts/BarChart02"
import BarChartAll from "../../components/BarCharts/BarChartAll"
import BarChart from "../../components/BarCharts/BarChart00";
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";
import EntryForm from "../../components/EntryForm";
import ProgressCircle from "../../components/ProgressCircle";
import DropdownMenu from "../../components/DropDownMenuFrute";
import DropdownSemana from "../../components/DropDownMenuSemana";

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

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>

                <DropdownMenu onOptionSelect={handleOptionSelect} />
                <DropdownSemana onOptionSelect={handleOptionSelect} />

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
                        Download
                    </Button>
                </Box>
            </Box>

            {/* Grid & Chart */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
                mt="15px"

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
                        title="30 Días"
                        subtitle="Rotación de Inventario"
                        progress="0.37"
                        increase="+5%"
                        icon={
                            <RotateRightOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="350 Productos"
                        subtitle="Merma"
                        progress="0.2"
                        increase="+15%"
                        icon={
                            <DeleteSweepOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="127"
                        subtitle="Cobertura de Inventario"
                        progress="0.6"
                        increase="+7%"
                        icon={
                            <TrafficIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2*/}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
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
                                STOCK PROMEDIO
                            </Typography>
                            <Typography variant="h6" fontWeight="600" color={colors.greenAccent[500]}>
                                23.67
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

                    {/* If para cambiar grafica de linea */}
                    {selectedOption === '' && 
                        <Box height="250px" mt="-20px" align="center">
                            <LineChartAll isDashboard={true} />
                        </Box>
                    }
                    {selectedOption === 'option1' && 
                        <Box height="250px" mt="-20px">
                            <LineChart00 isDashboard={true} />
                        </Box>
                    }
                    {selectedOption === 'option2' && 
                        <Box height="250px" mt="-20px">
                            <LineChart01 isDashboard={true} />
                        </Box>
                    }
                    {selectedOption === 'option3' && 
                        <Box height="250px" mt="-20px">
                            <LineChart02 isDashboard={true} />
                        </Box>
                    }
                </Box>
                { /* KPI de Stock promedio */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h2" fontWeight="500px">
                        Stock Promedio
                    </Typography>
                    <Box 
                        display="flex" 
                        flexDirection="column"
                        alignItems="center" 
                        mt="25px"
                    >
                        <Typography 
                            variant="h1" 
                            color={colors.greenAccent[500]} 
                            fontWeight="900px"
                            sx={{ mt: "40px", alignContent: "center"}}
                        >
                            37.57
                        </Typography>
                        <Typography 
                            variant="h2" 
                            color={colors.greenAccent[500]} 
                            fontWeight="800px"
                            sx={{ mt: "40px"}}
                        >
                            KG
                        </Typography>
                        {/* hmmmmm */}
                        <Typography>De la semana del 20</Typography>
                    </Box>
                </Box>

                {/* Row 3 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography 
                        variant="h5" 
                        fontWeight="600" 
                        sx ={{ p: "30px 30px 0 30px"}}
                    >
                        CANTIDAD
                    </Typography>
                    <Box 
                        height="250px"
                        mt="-20px"
                    >
                        {/* If para cambiar grafica de linea */}
                        {selectedOption === '' && 
                            <Box height="250px" mt="-20px" align="center">
                                <BarChartAll isDashboard={true} />
                            </Box>
                        }
                        {selectedOption === 'option1' && 
                            <Box height="250px" mt="-20px">
                                <BarChart00 isDashboard={true} />
                            </Box>
                        }
                        {selectedOption === 'option2' && 
                            <Box height="250px" mt="-20px">
                                <BarChart01 isDashboard={true} />
                            </Box>
                        }
                        {selectedOption === 'option3' && 
                            <Box height="250px" mt="-20px">
                                <BarChart02 isDashboard={true} />
                            </Box>
                        }
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h2" fontWeight="500px">
                        Contraccion de inventario
                    </Typography>
                    <Box 
                        display="flex" 
                        flexDirection="column"
                        alignItems="center" 
                        mt="25px"
                    >
                        <Typography 
                            variant="h1" 
                            color={colors.greenAccent[500]} 
                            fontWeight="900px"
                            sx={{ mt: "40px", alignContent: "center"}}
                        >
                            57.89
                        </Typography>
                        <Typography 
                            variant="h2" 
                            color={colors.greenAccent[500]} 
                            fontWeight="800px"
                            sx={{ mt: "40px"}}
                        >
                            KG
                        </Typography>
                        {/* hmmmmm */}
                        <Typography>De la semana del 20</Typography>
                    </Box>
                </Box>

                {/* */}
            </Box>
        </Box>
    );
};

export default Dashboard;