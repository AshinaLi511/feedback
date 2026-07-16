import { useState } from "react"
import OptionButton from "./OptionButton"
import { supabase } from "../lib/supabase"

import zh from "../data/languages/zh"
import en from "../data/languages/en"


function ChatFlow({ language }) {


  const [step, setStep] = useState(0)

  const [messages, setMessages] = useState([])

  const [finished, setFinished] = useState(false)

  const [otherSelected, setOtherSelected] = useState(false)

  const [otherText, setOtherText] = useState("")


  const languages = {
    zh,
    en
  }


  const currentLanguage = languages[language]

  const currentQuestion =
    currentLanguage.questions[step]



  async function saveFeedback(finalMessages) {


    const answers = {}


    finalMessages.forEach(item => {

      answers[item.question] = item.answer

    })


    const { error } = await supabase
      .from("feedbacks")
      .insert({

        language: language,

        q1: answers[currentLanguage.questions[0].q] || "",

        q2: answers[currentLanguage.questions[1].q] || "",

        q3: answers[currentLanguage.questions[2].q] || "",

        q4: answers[currentLanguage.questions[3].q] || ""

      })


    if(error){

      console.log(error)

    }

  }




  async function nextQuestion(answer){


    const newMessages = [

      ...messages,

      {
        question: currentQuestion.q,
        answer: answer
      }

    ]


    setMessages(newMessages)


    setOtherSelected(false)

    setOtherText("")



    if(step < currentLanguage.questions.length - 1){


      setTimeout(()=>{

        setStep(step + 1)

      },300)


    }else{


      await saveFeedback(newMessages)


      setTimeout(()=>{

        setFinished(true)

      },300)


    }

  }





  function choose(option){


    if(option === "其他" || option === "Other"){

      setOtherSelected(true)

      return

    }


    nextQuestion(option)

  }





  function submitOther(){


    if(otherText.trim()===""){

      return

    }


    nextQuestion(otherText)

  }





  function goBack(){


    if(step>0){

      setStep(step-1)

      setMessages(
        messages.slice(0,-1)
      )

    }

  }





  if(finished){

    return (

      <div className="chat-container">

        <div className="thank-card">

          <div className="success-icon">
            ✓
          </div>

          <h1>
            {currentLanguage.thankTitle}
          </h1>

          <p>
            {currentLanguage.thankText}
          </p>

        </div>

      </div>

    )

  }





  return (

    <div className="chat-container">


      <div className="top-bar">


        <span
          className="back-button"
          onClick={goBack}
        >
          ←
        </span>


        <div className="dots">

          {
            [0,1,2,3].map(i=>(

              <span
                key={i}
                className={
                  i<=step
                  ?
                  "active-dot"
                  :
                  ""
                }
              />

            ))
          }

        </div>


      </div>



      <div className="chat-history">


        {
          messages.map((item,index)=>(

            <div key={index}>

              <div className="question-message">

                {item.question}

              </div>


              <div className="answer-message">

                {item.answer}

              </div>

            </div>

          ))
        }




        <div className="question-message current">

          {currentQuestion.q}

        </div>




        {
          otherSelected

          ?

          <div className="other-box">

            <div className="other-title">

              {currentLanguage.otherTitle}

            </div>


            <input

              value={otherText}

              onChange={
                e=>setOtherText(e.target.value)
              }

              placeholder={
                currentLanguage.placeholder
              }

            />


            <button

              className={
                otherText.trim()
                ?
                "continue active"
                :
                "continue"
              }

              onClick={submitOther}

            >

              {currentLanguage.continue}

            </button>


          </div>


          :


          <div className="options">


            {
              currentQuestion.options.map(option=>(

                <OptionButton

                  key={option}

                  text={option}

                  onClick={()=>choose(option)}

                />

              ))
            }


          </div>

        }



      </div>


    </div>

  )


}


export default ChatFlow