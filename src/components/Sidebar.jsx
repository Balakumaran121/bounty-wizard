import React from 'react'
import { useBounty } from '../context/BountyContext'
import { validateStep1, validateStep2 } from '../utils/validators'

const steps = [ {id:1, title:'Basics'}, {id:2, title:'Rewards'}, {id:3, title:'Backer'} ]

export default function Sidebar(){
  const { data, currentStep, setCurrentStep } = useBounty()

  function canGoTo(stepId){
    if(stepId === currentStep) return true
    if(stepId < currentStep) return true
    // future steps: validate previous steps
    if(stepId === 2){
      return Object.keys(validateStep1(data)).length === 0
    }
    if(stepId === 3){
      return Object.keys(validateStep1(data)).length === 0 && Object.keys(validateStep2(data)).length === 0
    }
    return false
  }

  return (
    <aside className="w-56 p-4 bg-white rounded shadow">
      <ul className="space-y-2">
        {steps.map(s => (
          <li key={s.id}>
            <button onClick={()=> canGoTo(s.id) && setCurrentStep(s.id) }
              className={`w-full text-left px-3 py-2 rounded ${currentStep===s.id? 'bg-blue-50 border-l-4 border-blue-500':''}`}
              disabled={!canGoTo(s.id)}
            >
              <div className="text-sm font-medium">{s.title}</div>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}