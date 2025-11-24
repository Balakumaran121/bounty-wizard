import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AddBounty from './pages/AddBounty'
import Confirmation from './pages/Confirmation'
import Result from './pages/Result'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/add-bounty/step-1" replace />} />

      {/* Parent Route */}
      <Route path="/add-bounty/*" element={<AddBounty />} />

      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  )
}