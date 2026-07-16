import { useState } from "react"
import LanguageSelect from "./components/LanguageSelect"
import ChatFlow from "./components/ChatFlow"


function App() {

  const [language, setLanguage] = useState(null)


  return (

    <div className="app">

      {
        language ?

        <ChatFlow language={language} />

        :

        <LanguageSelect
          onSelect={setLanguage}
        />
      }

    </div>

  )

}


export default App