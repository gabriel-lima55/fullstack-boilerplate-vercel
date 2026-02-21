import { useEffect } from "react"
import "./App.css"

function App() {

  useEffect(() => {
    fetch("/api/")
      .then(res => res.text())
      .then(data => console.log(data))
  }, [])

  return (
    <h1>Sistema Financeiro</h1>
  )
}

export default App
