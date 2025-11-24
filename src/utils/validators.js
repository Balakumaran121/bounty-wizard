export function validateStep1(state){
  const errors = {}
  if(!state.title?.trim()) errors.title = 'Title is required'
  else if(state.title.length > 40) errors.title = 'Title must be at most 40 characters'
  if(!state.description?.trim()) errors.description = 'Description is required'
  if(!state.type) errors.type = 'Bounty type is required'
  if(!state.dominant_core) errors.dominant_core = 'Dominant core is required'
  if(state.mode === 'physical' && !state.location?.trim()) errors.location = 'Location required for physical mode'
  return errors
}

export function validateStep2(state){
  const errors = {}
  if(!state.reward?.amount || Number(state.reward.amount) <= 0) errors.reward_amount = 'Amount must be greater than 0'
  if(!state.reward?.currency) errors.reward_currency = 'Currency is required'
  if(!state.timeline?.expiration_date) errors.expiration_date = 'Expiration date is required'
  else if(new Date(state.timeline.expiration_date) <= new Date()) errors.expiration_date = 'Expiration must be in the future'
  if(state.hasImpactCertificate && !state.impactBriefMessage?.trim()) errors.impactBriefMessage = 'Impact brief is required'
  return errors
}

export function validateStep3(state){
  const errors = {}
  if(state.has_backer){
    if(!state.backer?.name?.trim()) errors.backer_name = 'Backer name required'
    if(!state.backer?.logo) errors.backer_logo = 'Backer logo required'
  }
  if(!state.terms_accepted) errors.terms_accepted = 'Accept terms to submit'
  return errors
}

