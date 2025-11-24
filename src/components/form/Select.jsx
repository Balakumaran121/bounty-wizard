import React from 'react'
export default function Select({ label, value, onChange, name, placeholder, options, error }){
  return (
    <div className="mb-3">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <select value={value} onChange={e=>onChange(name, e.target.value)} className={`w-full rounded border px-3 py-2 focus:outline-none ${error? 'border-red-500':'border-gray-300'}`}>
        <option value="">{placeholder || 'Select'}</option>
        {options.map(opt=> <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}