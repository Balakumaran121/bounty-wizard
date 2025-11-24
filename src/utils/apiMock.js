export function createBounty(payload){
  return new Promise((resolve) => {
    setTimeout(()=>{
      const out = {
        ...payload,
        timeline: {
          ...payload.timeline,
          expiration_date: payload.timeline.expiration_date ? new Date(payload.timeline.expiration_date).toISOString() : null
        }
      }
      resolve(out)
    }, 1200)
  })
}