import { useState } from 'react'
import './App.css'
import Header from './Header'
import Grip from './Grip'
import Actions from './Actions'
import Decoration1 from './Decoration1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article className='device'>
        <div>
          <Header />
          <div className="flex gap-x-8">
            <Grip/>
            <div className="flex-1 max-w-5xl">
              <div className="mx-auto d1 flex items-center place-content-center rounded-full h-72">
                <div className="d2 flex items-center place-content-center rounded-full h-56 w-56">
                  <div className="bg-gradient-to-tr from-slate-300 to-slate-400 rounded-full h-32 w-32"></div>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-end w-8 border-t border-white'>
              <span className="block w-8 h-8 text-center bg-tint2-400 text-tint2-200">G</span>

              <Decoration1/>
            </div>
          </div>
        </div>
        <div>
          <Actions/>
        </div>
      </article>
    </>
  )
}

export default App
