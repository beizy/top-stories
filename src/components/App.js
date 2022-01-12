import "../styles/App.css"
import getArticles from "./apiCalls"
import { useState, useEffect } from "react"
import Header from "./Header"
import Newslist from "./Newslist"

function App() {
  const [articles, setArticles] = useState([])
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    getArticles("home")
      .then(data => setArticles([...data.results]))
      .catch(error => setErrorMsg(error))
  }, [])

  return (
    <div className="App">
      <Header />
      <Newslist allArticles={articles} />
    </div>
  )
}

export default App
