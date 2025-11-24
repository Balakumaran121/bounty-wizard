import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Confirmation(){
  const loc = useLocation()
  const nav = useNavigate()
  const payload = loc.state?.payload
  useEffect(()=>{
    if(!payload) nav('/add-bounty')
    // simulate short confirmation before showing result
    const t = setTimeout(()=> nav('/result', { state: { payload } }), 800)
    return ()=> clearTimeout(t)
  },[])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow text-center">
        <h2 className="text-xl font-bold mb-2">Bounty Created</h2>
        <p className="mb-4">Processing... Redirecting to result page.</p>
        <pre className="text-sm bg-gray-50 p-3 rounded max-h-64 overflow-auto">{JSON.stringify(payload, null, 2)}</pre>
      </div>
    </div>
  )
}
