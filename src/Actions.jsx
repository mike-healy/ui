import react, { useState } from 'react'

const Actions = () => {

  const [paused, setPaused] = useState(false)

  return <div className='mt-12 flex gap-x-1 h-12 text-center'>
    <button className='min-w-24 p-4'>Play</button>
    <button onClick={() => setPaused(!paused)} className='min-w-24 p-4'>{ paused ? 'PAUSED' : 'Pause'}</button>
    <button className='min-w-24 p-4'>Stop</button>
    <button className='min-w-24 p-4'>Triangle</button>
  </div>
}

export default Actions;
