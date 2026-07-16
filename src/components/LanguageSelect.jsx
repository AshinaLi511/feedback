function LanguageSelect({onSelect}) {


  const languages = [
    {
      id:"zh",
      name:"🇨🇳 中文"
    },
    {
      id:"en",
      name:"🇺🇸 English"
    },
    {
      id:"es",
      name:"🇪🇸 Español"
    },
    {
      id:"ja",
      name:"🇯🇵 日本語"
    },
    {
      id:"ko",
      name:"🇰🇷 한국어"
    },
    {
      id:"pt",
      name:"🇧🇷 Português"
    },
    {
      id:"th",
      name:"🇹🇭 ภาษาไทย"
    },
    {
      id:"vi",
      name:"🇻🇳 Tiếng Việt"
    }
  ]


  return (

    <div className="chat-card">

      <h1>
        Choose Your Language
      </h1>


      <p>
        Share your experience with Intent
      </p>


      <div className="options">

        {
          languages.map((item)=>(

            <button
              key={item.id}
              className="option-button"
              onClick={()=>onSelect(item.id)}
            >

              {item.name}

            </button>

          ))
        }

      </div>

    </div>

  )

}


export default LanguageSelect