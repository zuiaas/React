import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './global.css'
import App from './pages/app.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<App />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)