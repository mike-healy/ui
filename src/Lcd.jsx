const Lcd = () => {

  const label = () => {
    const d = new Date();
    return new Intl.DateTimeFormat().format(d);
  }

  return <output className="block rounded-lg p-1 bg-gray-800">
    <time className="block w-48 text-lg rounded-[calc(0.5rem-0.25rem)] text-center p-2 bg-gradient-to-bl from-gray-600 to-gray-800">
      { label() }
    </time>
  </output>
}

export default Lcd;
