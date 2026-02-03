const Lcd = ({ timeMode, toggle }) => {

  const label = () => {
    const d = new Date()

    if (timeMode === 0) {
      return new Intl.DateTimeFormat().format(d)
    }

    const leadZero = (i) => i < 10 ? `0${i}` : i

    return `${leadZero(d.getHours())}:${leadZero(d.getMinutes())}`
  }

  return <output className="block rounded-sm p-1 bg-zinc-600 border-zinc-300 border-4 shadow">
    <time
      onClick={toggle}
      className="relative block w-32 sm:w-48 text-sm md:text-lg text-center p-1 sm:p-2 bg-gradient-to-bl from-zinc-300 via-zinc-600 to-zinc-700"
    >
      <span className="block absolute top-1 right-1 w-20 h-[55%] bg-gradient-to-tr from-white/15 to-blue-100/30"></span>
      <span className="block absolute top-4 right-16 w-12 h-[55%] bg-gradient-to-tr from-white/5 to-blue-100/20"></span>
      { label() }
    </time>
  </output>
}

export default Lcd;
