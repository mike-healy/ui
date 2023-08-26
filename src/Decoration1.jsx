const getColors = (color) => {
  if (color === 'slate') {
    return {
      bg: `bg-slate-700`,
      border: `border-slate-700`
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

const Decoration1 = ({color = 'slate'}) => {

  const { bg, border } = getColors(color)

  return <div className="w-8 mt-8">
    <span className={`block h-2 mt-4 ${bg}`}></span>
    <span className={`block h-4 w-4 border-r-2 ${border}`}></span>
    <div className="bg-slate-300 h-12 text-center">m</div>
  </div>
};

export default Decoration1;
