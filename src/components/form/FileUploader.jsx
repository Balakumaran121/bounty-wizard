import React from 'react'
export default function FileUploader({ label, value, onChange, name, error }){
  function handleFile(e){
    const file = e.target.files[0]
    if(!file) return
    // show preview URL
    const url = URL.createObjectURL(file)
    onChange(name, { file, url })
  }
  return (
    <div className="mb-3">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input type="file" accept="image/*" onChange={handleFile} />
      {value?.url && <img src={value.url} alt="preview" className="mt-2 w-28 h-28 object-contain border" />}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}