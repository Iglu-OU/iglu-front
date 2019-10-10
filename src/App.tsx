import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Button from './components/Button/Button'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <Button label="hello" onClick={() => console.log('asdasds')} disabled={true}></Button>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )

  function handleClick() {
    console.log('oh hello')
  }
}

export default App
