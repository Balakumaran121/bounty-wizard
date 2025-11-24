import React from 'react'
import Toggle from '../components/form/Toggle'
import Input from '../components/form/Input'
import FileUploader from '../components/form/FileUploader'
import { useBounty } from '../context/BountyContext'

export default function Step3Backer({ errors = {}, submitting }){
  const { data, update } = useBounty()

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Backer Information & Terms</h2>
      <Toggle label="Has Backer?" checked={data.has_backer} onChange={(v)=>update('has_backer', v)} />
      {data.has_backer && (
        <div>
          <Input label="Backer Name" name="backer.name" value={data.backer.name} onChange={(n,v)=>update('backer.name', v)} error={errors.backer_name} />
          <FileUploader label="Backer Logo" name="backer.logo" value={data.backer.logo} onChange={(n,v)=>update('backer.logo', v)} error={errors.backer_logo} />
          <Input label="Backer Message" name="backer.message" value={data.backer.message} onChange={(n,v)=>update('backer.message', v)} />
        </div>
      )}

      <div className="mt-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={data.terms_accepted} onChange={e=>update('terms_accepted', e.target.checked)} />
          <span>I accept the Terms & Conditions</span>
        </label>
        {errors.terms_accepted && <p className="text-red-500 text-sm mt-1">{errors.terms_accepted}</p>}
      </div>
    </div>
  )
}