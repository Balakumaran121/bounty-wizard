import React from 'react'
import Input from '../components/form/Input'
import Textarea from '../components/form/Textarea'
import Select from '../components/form/Select'
import RadioGroup from '../components/form/RadioGroup'
import { useBounty } from '../context/BountyContext'

const typeOptions = [
  { value: 'Content', label: 'Content' },
  { value: 'Design', label: 'Design' },
  { value: 'Development', label: 'Development' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Other', label: 'Other' }
]
const coreOptions = [ {value:'Water', label:'Water'}, {value:'Earth', label:'Earth'}, {value:'Social', label:'Social'}, {value:'Energy', label:'Energy'} ]

export default function Step1Basics({ errors={}}){
  const { data, update } = useBounty()
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Basic Details</h2>
      <Input label="Bounty Title" name="title" value={data.title} onChange={(n,v)=>update(n,v)} error={errors.title} placeholder="Short title (max 40 chars)" maxLength={40} />
      <Textarea label="Bounty Description" name="description" value={data.description} onChange={(n,v)=>update(n,v)} error={errors.description} placeholder="Describe the bounty" />
      <Select label="Bounty Type" name="type" value={data.type} onChange={(n,v)=>update(n,v)} options={typeOptions} error={errors.type} placeholder="Select Type" />
      <Select label="Dominant Impact Core" name="dominant_core" value={data.dominant_core} onChange={(n,v)=>update(n,v)} options={coreOptions} error={errors.dominant_core} placeholder="Select Core" />
      <RadioGroup label="Bounty Mode" name="mode" value={data.mode} onChange={(n,v)=>update(n,v)} options={[{value:'digital', label:'Digital'}, {value:'physical', label:'Physical'}]} />
      {data.mode === 'physical' && <Input label="Location" name="location" value={data.location} onChange={(n,v)=>update(n,v)} error={errors.location} placeholder="City, Country" />}
    </div>
  )
}