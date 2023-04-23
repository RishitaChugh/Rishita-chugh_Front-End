import React from 'react'
import './App.css';
import WrappedListComponent from './WrappedListComponent';

const items = [
  {
    "text" : "rishita",
  },
  {
    "text" : "12",
  },
  {
    "text" : "NT"
  },

]
const App = () => {
  return (
   <>
    <WrappedListComponent items = {items} />
   </>
  )
}

export default App