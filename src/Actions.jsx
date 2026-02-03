import React, { useState } from 'react'
import ActionButton from './ActionButton'

const Actions = () => {

  // Ok, this is a good example to refactor with useReducer
  // 3 actions each call their own useState + increment the counter.
  // use a reducer to modify bulk state.

  const [clickCount, setClickCount] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hasStop, setHasStop] = useState(true)

  return (
    <div className='mt-12 flex gap-x-[2px] h-12 text-slate-500 text-center shadow-inner p-1 bg-slate-700/10 rounded-[0.25rem] text-sm'>
      <ActionButton
        onClick={() => {
          setHasStop(true)
          setClickCount(clickCount + 1)
        }}
      >
        <svg className='inline-block' width="20" height="20" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          {!hasStop && (<path d="M56 0L0 58L-5.07052e-06 4.89568e-06L56 0Z" fill="#f58d6b"/>)}
          {hasStop && (<path d="M0 58L56 0V58H0Z" fill="#1f298a"/>)}
        </svg>
      </ActionButton>

      <ActionButton
        onClick={() => {
          setPaused(!paused)
          setClickCount(clickCount + 1)
        }}
      >
        { paused ? 'PLAY' : 'Pause'}
      </ActionButton>

      {hasStop && (
        <ActionButton
          onClick={() => {
            setHasStop(false)
            setClickCount(clickCount + 1)
          }}
        >
          Triangle
        </ActionButton>
      )}
      <ActionButton>{ clickCount }</ActionButton>
    </div>
  )
}

export default Actions;
