const getColors = (color) => {
  if (color === 'slate') {
    return {
      bg: `bg-slate-600`,
      border: `border-slate-600`
    }
  }

  if (color === 'blue') {
    return {
      bg: `bg-blue-800`,
      border: `border-blue-800`
    }
  }

  return {
    bg: 'bg-black',
    border: 'border-black',
  }

}

const Decoration1 = ({
  color = 'slate',
  timeMode,
  toggle,
}) => {
  const { bg, border } = getColors(color)

  const lineHeight = timeMode ? 'h-8' : 'h-6'

  return <div className="w-8 mt-8">
    <span className={`block h-2 mt-4 ${bg}`}></span>
    <span className={`block ${lineHeight} w-[17px] border-r ${border}`}></span>
    <div className="bg-slate-300 h-24 text-center text-sm">
      <button
        onClick={toggle}
        className="p-2 w-full bg-white/30 hover:text-tint2-400 focus:text-tint2-400 hover:bg-tint2-200 focus:bg-tint2-200"
      >
        {timeMode === 1 ? 'D' : 'T'}
      </button>
    </div>
  </div>
};

export default Decoration1;
