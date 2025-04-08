import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'

const QRCodePix = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  useEffect(() => {
    const gerarQRCode = async () => {
      const payloadPix = '00020126580014BR.GOV.BCB.PIX0136seu@email.com5204000053039865802BR5920Seu Nome6009SAOPAULO62290525sorteio1234567896304A13B'
      
      try {
        const url = await QRCode.toDataURL(payloadPix)
        setQrCodeUrl(url)
      } catch (err) {
        console.error('Erro ao gerar QR Code:', err)
      }
    }

    gerarQRCode()
  }, [])

  return (
    <div>
      <h2>Escaneie o QR Code para participar:</h2>
      <h2>Concorra a um Vale Compras de R$500 reais na Alfa Descartáveis!</h2>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code Pix" />}
    </div>
  )
}

export default QRCodePix

