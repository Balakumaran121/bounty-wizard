import React, { createContext, useContext,  } from 'react'
import useBountyWizard, { initialState } from '../hooks/useBountyWizard'

const BountyContext = createContext(null)

export function BountyProvider({ children }){
  const { data, update, currentStep, setCurrentStep, setData } = useBountyWizard()
  return (
    <BountyContext.Provider value={{ data, update, currentStep, setCurrentStep, setData }}>
      {children}
    </BountyContext.Provider>
  )
}

export function useBounty(){
  const ctx = useContext(BountyContext)
  if(!ctx) throw new Error('useBounty must be used inside BountyProvider')
  return ctx
}