import React from 'react'

const ActionButton = ({ children, onClick = null }) => {
  return (
    <button
      onClick={onClick}
      className='min-w-20 px-4 text-center
        bg-gradient-to-b from-slate-50 via-slate-100 to-slate-[#c0c0c0] via-20%
        shadow-sm rounded-sm hover:shadow-lg active:shadow-inner
        border-b border-b-slate-300 border-t border-t-white border-r border-r-slate-300'
    >
      {children}
    </button>
  )
}

export default ActionButton;
