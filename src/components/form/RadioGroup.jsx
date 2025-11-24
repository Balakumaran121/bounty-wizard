import React from 'react'
export default function RadioGroup({ label, name, value, onChange, options }){
  return (
    <div className="mb-3">
      {label && <div className="block text-sm font-medium mb-1">{label}</div>}
      <div className="flex gap-4">
        {options.map(opt => (
          <label key={opt.value} className="flex items-center gap-2">
            <input type="radio" name={name} checked={value===opt.value} onChange={()=>onChange(name, opt.value)} />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}