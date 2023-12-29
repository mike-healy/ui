const Lcd = ({ timeMode, toggle }) => {

  const label = () => {
    const d = new Date()

    if (timeMode === 0) {
      return new Intl.DateTimeFormat().format(d)
    }

    const leadZero = (i) => i < 10 ? `0${i}` : i

    return `${leadZero(d.getHours())}:${leadZero(d.getMinutes())}`
  }

  return <output className="block rounded-md p-1 bg-gray-800">
    <time
      onClick={toggle}
      className="block w-32 sm:w-48 text-sm md:text-lg rounded-[calc(0.375rem-0.25rem)] text-center p-1 sm:p-2 bg-gradient-to-bl from-gray-600 to-gray-800"
    >
      { label() }
    </time>
  </output>
}

export default Lcd;
