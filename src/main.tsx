import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Question from './pages/question.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
     <Route index element={<App />} />
     <Route path="question/:id" element={<Question />} />
    </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
