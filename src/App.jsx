
// TODO Form, Table, some js to push data from the form to the table

import './App.css'

import Form from './components/Form'
import Table from './components/Table'

import { useState } from 'react'

// create an App component to render as our main component

function App() { //Capitalize component names
  // all components have to return some JSX -- that's it

  const [favLinks, setFavLinks] = useState([])


  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data])

  }

  return(
    <div>
      <h1 className="testClass">Placeholder for the App</h1>

      <Form onNewSubmit={handleNewSubmission} />

      <Table links={favLinks} />

    </div>
  )
}

export default App