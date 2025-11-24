import React from 'react'
export default function Textarea({ label, value, onChange, name, placeholder, error }){
  return (
    <div className="mb-3">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <textarea value={value} onChange={e=>onChange(name, e.target.value)} placeholder={placeholder}
        className={`w-full rounded border px-3 py-2 h-32 focus:outline-none ${error? 'border-red-500':'border-gray-300'}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}