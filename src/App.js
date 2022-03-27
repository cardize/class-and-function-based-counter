import React from 'react'
import './components/styles.css'
import FunctionComponent from './components/FunctionComponent'
import ClassComponent from './components/ClassComponent'

export default function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
    </div>
  )
}
