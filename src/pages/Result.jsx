import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Result(){
  const loc = useLocation()
  const nav = useNavigate()
  const payload = loc.state?.payload
  if(!payload) return (
    <div className="p-6">
      <h2>No payload found</h2>
      <button onClick={()=>nav('/add-bounty')} className="mt-4 px-4 py-2 border rounded">Back</button>
    </div>
  )

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Bounty Result</h1>
        <div className="mb-4">
          <button onClick={()=>nav('/add-bounty')} className="px-3 py-2 border rounded">Create another</button>
        </div>
        <pre className="bg-gray-50 p-4 rounded overflow-auto" style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(payload, null, 2)}</pre>
      </div>
    </div>
  )
}
