import React from 'react'
export default function StepNavButtons({ onBack, onNext, backDisabled, nextDisabled, submitLabel }){
  return (
    <div className="flex justify-between mt-6">
      <button onClick={onBack} disabled={backDisabled} className="px-4 py-2 rounded border">
        Back
      </button>
      <div>
        <button onClick={onNext} disabled={nextDisabled} className="px-4 py-2 rounded bg-blue-600 text-white">
          {submitLabel || 'Next'}
        </button>
      </div>
    </div>
  )
}