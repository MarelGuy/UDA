import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Container } from 'reactstrap';
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNavBar from './Components/TopNavBar';

import Tpsit from './Pages/Tpsit';
import Storia from './Pages/Storia';
import Crediti from './Pages/Crediti';
import Diritto from './Pages/Diritto';
import Inglese from './Pages/Inglese';
import Informatica from './Pages/Informatica';
import SistemiReti from './Pages/SistemiReti';
import Telecomunicazioni from './Pages/Telecomunicazioni';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Container>
        <TopNavBar />
        <Routes>
          <Route exact path="/tpsit" element={<Tpsit />} />
          <Route exact path="/storia" element={<Storia />} />
          <Route exact path="/crediti" element={<Crediti />} />
          <Route exact path="/diritto" element={<Diritto />} />
          <Route exact path="/inglese" element={<Inglese />} />
          <Route exact path="/informatica" element={<Informatica />} />
          <Route exact path="/sistemi-e-reti" element={<SistemiReti />} />
          <Route exact path="/telecomunicazioni" element={<Telecomunicazioni />} />
          <Route path="*" element={<Navigate to="/storia" />} />
        </Routes>
      </Container>
    </Router>
  </StrictMode>
)
