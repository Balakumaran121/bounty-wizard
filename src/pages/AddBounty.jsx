import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Step1Basics from './Step1Basics'
import Step2Rewards from './Step2Rewards'
import Step3Backer from './Step3Backer'
import { useBounty } from '../context/BountyContext'
import { validateStep1, validateStep2, validateStep3 } from '../utils/validators'
import { createBounty } from '../utils/apiMock'

export default function AddBounty() {
  const { data, setCurrentStep, currentStep ,setData} = useBounty()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  // -----------------------------------------------------------
  // NEXT BUTTON LOGIC  (with routing)
  // -----------------------------------------------------------
function handleNext() {
  if (currentStep === 1) {
    const e = validateStep1(data)
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setCurrentStep(2)
      navigate("/add-bounty/step-2")   // FIX
    }
  } 
  else if (currentStep === 2) {
    const e = validateStep2(data)
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setCurrentStep(3)
      navigate("/add-bounty/step-3")   // FIX
    }
  } 
  else if (currentStep === 3) {
    const e = validateStep3(data)
    setErrors(e)
    if (Object.keys(e).length === 0) handleSubmit()
  }
}


  // -----------------------------------------------------------
  // BACK BUTTON LOGIC  (with routing)
  // -----------------------------------------------------------
  function handleBack() {
  if (currentStep === 3) {
    setCurrentStep(2)
    navigate("/add-bounty/step-2")   // FIX
  } else if (currentStep === 2) {
    setCurrentStep(1)
    navigate("/add-bounty/step-1")   // FIX
  }
}


  // -----------------------------------------------------------
  // SUBMIT FORM
  // -----------------------------------------------------------
  async function handleSubmit() {
  setSubmitting(true)
  try {
    const result = await createBounty(data)

    // Reset form state
    setCurrentStep(1)
    setData({}) // Optional: clear all fields

    navigate('/confirmation', { state: { payload: result } })
  } catch (err) {
    console.error(err)
  } finally {
    setSubmitting(false)
  }
}


  // -----------------------------------------------------------
  // UI
  // -----------------------------------------------------------
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-5 gap-6">
        
        <div className="col-span-1">
          <Sidebar />
        </div>

        <div className="col-span-4 bg-white p-6 rounded shadow">

          {/* Nested routes for steps */}
          <Routes>
            <Route index element={<Step1Basics errors={errors} />} />
            <Route path="step-1" element={<Step1Basics errors={errors} />} />
            <Route path="step-2" element={<Step2Rewards errors={errors} />} />
            <Route path="step-3" element={<Step3Backer errors={errors} submitting={submitting} />} />
          </Routes>

          {/* Navigation Buttons */}
          <div className="mt-4">
            <div className="flex justify-between">
              <button 
                onClick={handleBack} 
                disabled={currentStep === 1}
                className="px-4 py-2 rounded border"
              >
                Back
              </button>

              <button 
                onClick={handleNext}
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                {currentStep === 3 
                  ? (submitting ? 'Submitting...' : 'Create Bounty')
                  : 'Next'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
