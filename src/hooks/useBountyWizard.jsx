import { useState } from 'react'

export const initialState = {
  title: '',
  description: '',
  projectTitle: '',
  type: '',
  dominant_core: '',
  mode: 'digital',
  location: '',
  reward: { currency: 'USD', amount: '', winners: 1 },
  timeline: { expiration_date: '', estimated_completion: { days: 0, hours: 0, minutes: 0 } },
  hasImpactCertificate: false,
  impactBriefMessage: '',
  sdgs: [],
  has_backer: false,
  backer: { name: '', logo: '', message: '' },
  terms_accepted: false
}

export default function useBountyWizard(){
  const [data, setData] = useState(initialState)
  const [currentStep, setCurrentStep] = useState(1)

  function update(path, value){
    setData(prev => {
      const copy = JSON.parse(JSON.stringify(prev))
      const keys = path.split('.')
      let obj = copy
      keys.forEach((k, i) => {
        if(i === keys.length -1) obj[k] = value
        else obj = obj[k]
      })
      return copy
    })
  }

  return { data, update, currentStep, setCurrentStep, setData }
}
