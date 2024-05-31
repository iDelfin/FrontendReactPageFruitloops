
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

import  { Routes, Route } from "react-router-dom";

import Sidebar from "./scenes/global/Sidebar"

import Dashboard from "./scenes/dashboard";

import DetectionMenuOut from "./scenes/DetectionMenuOut"; 
//import Team from "./scenes/team";
import EntradaFruta from "./scenes/EntradaFruta";
//import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Registro from "./scenes/registro";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
//import FAQ from "./scenes/faq";
//import Calender from "./scenes/calendar";
import PredictionGraph from "./scenes/Prediciongraph";
import RegistroObjeto from "./scenes/registroobjeto";
import EOQ from "./scenes/eoq";
import Prediccion from "./scenes/prediccion"


function App() {
  const [theme, colorMode] = useMode();
  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/*<Sidebar />*/}
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DetectionMenuOut/>} />
              <Route path="/Dashbord" element={<Dashboard />} />
              { /*<Route path="/team" element={<Team />} /> */}
              { /*<Route path="/contacts" element={<Contacts />} /> */}
              <Route path="/EntradaFruta" element={<EntradaFruta />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              { /*<Route path="/faq" element={<FAQ />} /> */}
              { /*<Route path="/calendar" element={<Calendar />} /> */}
              <Route path="/esepredictno" element={<PredictionGraph />} />
              <Route path="/nada" element={<RegistroObjeto />} />
              <Route path="/EOQ" element={<EOQ />} />
              <Route path="/prediccion" element={<Prediccion />} />
            </Routes>
          </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  )
}

export default App;
