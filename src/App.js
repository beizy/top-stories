import "./App.css"
import getArticles from "./apiCalls"
import { useState, useEffect } from "react"

function App() {
  const [articles, setArticles] = useState([])
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    getArticles("home")
      .then(data => setArticles([...data.results]))
      .catch(error => setErrorMsg(error))
  }, [])

  return <div className="App">Hello world</div>
}

export default App
