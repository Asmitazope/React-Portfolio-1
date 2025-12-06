import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import { Toast } from '@radix-ui/react-toast'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ToastProvider } from './assets/hooks/ToastProvider.jsx'

function App() {

  return (
    <>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ToastProvider>

    </>
  )
}

export default App
