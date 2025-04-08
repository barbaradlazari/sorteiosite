import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import QRCodePix from './QrCodePix.jsx'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <QRCodePix />
  </React.StrictMode>
)
