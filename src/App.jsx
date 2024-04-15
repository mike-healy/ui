import { useState } from 'react'
import { createActor, createMachine } from 'xstate'
import { useActor } from '@xstate/react'
import './App.css'
import Header from './Header'
import Grip from './Grip'
import Actions from './Actions'
import Decoration1 from './Decoration1'

function App() {
  const [count, setCount] = useState(0)
  const [timeMode, setTimeMode] = useState(0)

  const toggleTimeMode = () => {
    setTimeMode(timeMode === 0 ? 1 : 0)
    actor.send({ type: 'toggle' })
  }

  /*
  State Machine exploration. This works at a basic level,
  but nothing depends on the state.

  Next: how to integrate it with React state so it affects the UI.
  There's an Xstate React package
  */
  const dateTimeMachine = createMachine({
    id: 'toggle', // globally unique?
    initial: 'Date',
    states: {
      Date: {
        on: { toggle: 'Time' },
      },
      Time: {
        on: { toggle: 'Date' },
      },
    }
  });

  const actor = createActor(dateTimeMachine);

  actor.subscribe((snapshot) => {
    console.log(snapshot.value);
    // setTimeMode(snapshot.value !== 'Date' ? 1 : 0);
  });

  actor.start();

  return (
    <>
      <article className='device'>
        <div>
          <Header
            toggle={toggleTimeMode}
            timeMode={timeMode}
          />
          <div className="flex gap-x-8">
            <Grip/>
            <div className="flex-1 max-w-5xl rounded-2xl bg-gradient-to-b from-slate-600/10 to-transparent">
              <div className="mx-auto d1 flex items-center place-content-center rounded-full w-32 h-32 md:w-96 md:h-96">
                <div className="d2 flex items-center place-content-center rounded-full w-24 h-24 md:h-72 md:w-72">
                  <div className="bg-gradient-to-tl from-slate-300 to-slate-100 rounded-full w-12 h-12 md:h-40 md:w-40 hover:w-24 shadow-md hover:rotate-90 transform-gpu transition-all"></div>
                </div>
              </div>
            </div>

            <aside className='flex flex-col items-end w-12 pl-4 border-t border-r border-r-slate-300 border-t-[rgb(188,188,188)]'>
              <span className="w-8 h-8 text-center bg-tint2-400 text-tint2-300">G</span>
              <Decoration1
                timeMode={timeMode}
                toggle={toggleTimeMode}
              />
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
