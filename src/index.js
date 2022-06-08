import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Container } from 'reactstrap';
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";

import './style.css'

import TopNavBar from './Components/TopNavBar';

import Tpsit from './Pages/Tpsit';
import Storia from './Pages/Storia';
import Crediti from './Pages/Crediti';
import Diritto from './Pages/Diritto';
import Inglese from './Pages/Inglese';
import Religione from './Pages/Religione';
import Informatica from './Pages/Informatica';
import SistemiReti from './Pages/SistemiReti';
import Telecomunicazioni from './Pages/Telecomunicazioni';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Container>
        <TopNavBar />
        <Routes>
          <Route path="/tpsit" element={<Tpsit />} />
          <Route path="/storia" element={<Storia />} />
          <Route path="/crediti" element={<Crediti />} />
          <Route path="/diritto" element={<Diritto />} />
          <Route path="/inglese" element={<Inglese />} />
          <Route path="/religione" element={<Religione />} />
          <Route path="/informatica" element={<Informatica />} />
          <Route path="/sistemi-e-reti" element={<SistemiReti />} />
          <Route path="/telecomunicazioni" element={<Telecomunicazioni />} />
          <Route path="*" element={<Navigate to="/storia" />} />
        </Routes>
      </Container>
    </Router>
  </StrictMode>
)
