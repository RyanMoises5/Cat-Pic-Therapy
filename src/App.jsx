import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='bg-black text-slate-100 h-screen'>
        <Outlet />
      </div>
    </>
  )
}

export default App
