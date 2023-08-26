import react, { useState } from 'react';

const Lcd = () => {

  const [t, setT] = useState(null);

  const label = () => {
    const d = new Date();
    if (!t) return new Intl.DateTimeFormat(['en-au',]).format(d);
    return t;
  }


  return <output className="block rounded-lg p-1 bg-gray-800">
    <span className="block w-48 text-lg rounded-[calc(0.5rem-0.25rem)] text-center p-2 bg-gradient-to-bl from-gray-600 to-gray-800">
      { label() }
    </span>
    <button onClick={() => setT('Modified')}>M</button>
  </output>
}

export default Lcd;
