import React from 'react'
export default function Toggle({ label, checked, onChange }){
  return (
    <div className="mb-3 flex items-center gap-3">
      <div className="flex-1 text-sm font-medium">{label}</div>
      <button onClick={()=>onChange(!checked)} className={`w-12 h-6 rounded-full p-1 ${checked? 'bg-blue-500':'bg-gray-300'}`}>
        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${checked? 'translate-x-6':'translate-x-0'}`}></div>
      </button>
    </div>
  )
}
