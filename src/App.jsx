import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Toaster } from './components/ui/toaster'
import emailjs from "@emailjs/browser";

function App() {
  
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  return (
    <>
      <Toaster />
      <BrowserRouter basename='/dagr02-portfolio'>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
