import react, { useState } from 'react'

const Actions = () => {

  const [paused, setPaused] = useState(false)

  return <div className='mt-12 flex gap-x-[2px] h-12 text-slate-500 text-center'>
    <button className='min-w-24 p-4 bg-gradient-to-b from-slate-300 to-slate-50 shadow-sm rounded-sm'>Play</button>
    <button
      onClick={() => setPaused(!paused)}
      className='min-w-24 p-4 bg-gradient-to-b from-slate-300 to-slate-50 shadow-sm hover:shadow-md rounded-sm'
    >
      { paused ? 'PAUSED' : 'Pause'}
    </button>
    <button className='min-w-24 p-4 bg-gradient-to-b from-slate-300 to-slate-50 shadow-sm rounded-sm'>Stop</button>
  </div>
}

export default Actions;
