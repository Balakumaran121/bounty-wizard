import React from 'react'
import Select from '../components/form/Select'
import Input from '../components/form/Input'
import DatePicker from '../components/form/DatePicker'
import Toggle from '../components/form/Toggle'
import { useBounty } from '../context/BountyContext'

const currencyOptions = [ { value: 'USD', label: 'USD' }, { value: 'EUR', label: 'EUR' }, {value:'INR', label:'INR' }, {value:'GBP', label:'GBP'} ]
const sdgOptions = [ 'No Poverty','Zero Hunger','Good Health','Quality Education','Gender Equality','Clean Water','Affordable Energy' ]

export default function Step2Rewards({ errors = {} }){
  const { data, update } = useBounty()

  function setReward(key, val){ update(`reward.${key}`, val) }
  function setEstimated(key, val){ update(`timeline.estimated_completion.${key}`, Number(val)) }

  function toggleSDG(label){
    const set = new Set(data.sdgs)
    if(set.has(label)) set.delete(label)
    else set.add(label)
    update('sdgs', Array.from(set))
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Rewards & Timeline</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <Select label="Currency" name="currency" value={data.reward.currency} onChange={(n,v)=>setReward('currency', v)} options={currencyOptions} error={errors.reward_currency} />
        </div>
        <div className="col-span-1">
          <Input label="Total Reward Amount" name="amount" value={data.reward.amount} onChange={(n,v)=>setReward('amount', v)} error={errors.reward_amount} placeholder="e.g. 500" />
        </div>
        <div className="col-span-1">
          <Input label="Number of Winners" name="winners" value={data.reward.winners} onChange={(n,v)=>setReward('winners', v)} error={errors.winners} placeholder="1" />
        </div>
      </div>

      <div className="mt-4">
        <DatePicker label="Expiration Date" name="timeline.expiration_date" value={data.timeline.expiration_date} onChange={(n,v)=>update('timeline.expiration_date', v)} error={errors.expiration_date} />

        <div className="grid grid-cols-3 gap-4">
          <Input label="Estimated Days" name="days" value={data.timeline.estimated_completion.days} onChange={(n,v)=>setEstimated('days', v)} />
          <Input label="Estimated Hours" name="hours" value={data.timeline.estimated_completion.hours} onChange={(n,v)=>setEstimated('hours', v)} />
          <Input label="Estimated Minutes" name="minutes" value={data.timeline.estimated_completion.minutes} onChange={(n,v)=>setEstimated('minutes', v)} />
        </div>
      </div>

      <div className="mt-4">
        <Toggle label="Has Impact Certificate?" checked={data.hasImpactCertificate} onChange={(v)=>update('hasImpactCertificate', v)} />
        {data.hasImpactCertificate && <Input label="Impact Brief" name="impactBriefMessage" value={data.impactBriefMessage} onChange={(n,v)=>update(n,v)} error={errors.impactBriefMessage} />}
      </div>

      <div className="mt-4">
        <div className="text-sm font-medium mb-2">SDGs (select multiple)</div>
        <div className="flex flex-wrap gap-2">
          {sdgOptions.map(s=> (
            <button key={s} onClick={()=>toggleSDG(s)} className={`px-2 py-1 rounded border ${data.sdgs.includes(s)? 'bg-blue-100 border-blue-400':''}`}>{s}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
