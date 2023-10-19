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
            <div className="flex-1 max-w-5xl rounded-2xl bg-gradient-to-b from-slate-600/10 to-transparent">
              <div className="mx-auto d1 flex items-center place-content-center rounded-full w-96 h-96">
                <div className="d2 flex items-center place-content-center rounded-full h-72 w-72">
                  <div className="bg-gradient-to-tr from-slate-300 to-slate-400 rounded-full h-40 w-32 shadow-md hover:rotate-90 transform-gpu transition-all"></div>
                </div>
              </div>
            </div>

            <aside className='flex flex-col items-end w-12 pl-4 border-t border-slate-300 badfsorder-r-slate-300 border-r'>
              <span className="w-8 h-8 text-center bg-tint2-400 text-tint2-300">G</span>
              <Decoration1/>
            </aside>
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
