import React from 'react'
import Navbar from './component/Navbar'

const App = (props) => {
  return (
    <div>
      <Navbar />
      <h2 className='uppercase text-center mt-10 text-5xl text-blue-500'>- {props.Name1} & {props.Name2} -</h2>
    </div>
  )
}

export default App