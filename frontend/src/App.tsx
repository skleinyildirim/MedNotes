import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch("http://localhost:3000")
    .then((response) => response.text())
    .then((text) => setMessage(text))
  }, [])

  return <h1>{message}</h1>
}

export default App
