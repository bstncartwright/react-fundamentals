// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({ onSubmitUsername }) {

  const inputRef = React.useRef();
  const [value, setValue] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    onSubmitUsername(value);
  }

  const handleChange = (event) => {
    setValue(event.target.value.toLowerCase());
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={inputRef} 
          id="username" 
          type="text" 
          onChange={handleChange}
          value={value} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
