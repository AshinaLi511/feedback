import { useState } from "react"
import OptionButton from "./OptionButton"
import { supabase } from "../lib/supabase"

import zh from "../data/languages/zh"
import en from "../data/languages/en"
import ja from "../data/languages/ja"
import ko from "../data/languages/ko"
import es from "../data/languages/es"
import pt from "../data/languages/pt"
import th from "../data/languages/th"
import vi from "../data/languages/vi"
import fr from "../data/languages/fr"
import de from "../data/languages/de"


function ChatFlow({ language }) {


  const languageData = {

  zh,

  en,

  ja,

  ko,

  es,

  pt,

  th,

  vi,

  fr,

  de

}


  const currentLanguage = languageData[language]


  const [currentId, setCurrentId] = useState("q1")

  const [messages, setMessages] = useState([])

  const [finished, setFinished] = useState(false)

  const [changing, setChanging] = useState(false)

  const [selectedOptions, setSelectedOptions] = useState([])

  const [otherSelected, setOtherSelected] = useState(false)

  const [otherText, setOtherText] = useState("")



  const currentQuestion =
    currentLanguage.questions[currentId]



  function getProgress(){

    if(currentId==="q1") return "1/4"

    if(currentId==="q2") return "2/4"

    if(currentId==="q3") return "3/4"

    return "4/4"

  }





  async function saveFeedback(data){


    const answers = {}


    data.forEach(item=>{

      answers[item.id] = item.answer

    })



    const { error } = await supabase
      .from("feedbacks")
      .insert({

        language: language,

        duration:
          answers.q1 || "",


        useful_features:
          answers.q2 || "",


        usage_frequency:
          answers.q3 || "",


        experience:
          answers.q4 || "",


        satisfied_points:
          answers.q4_good || "",


        pain_points:
          answers.q4_bad || ""

      })


    if(error){

      console.log(
        "Save error:",
        error
      )

    }

  }







  function goNext(answer){


    const newMessages = [

      ...messages,

      {

        id: currentId,

        question: currentQuestion.q,

        answer: answer

      }

    ]


    setMessages(newMessages)



    let next = currentQuestion.next



    if(typeof next==="object"){

      next = next[answer]

    }



    setSelectedOptions([])

    setOtherSelected(false)

    setOtherText("")



    setChanging(true)



    if(next==="end"){


      saveFeedback(newMessages)


      setTimeout(()=>{

        setFinished(true)

      },500)


      return

    }



    setTimeout(()=>{


      setCurrentId(next)

      setChanging(false)


    },250)


  }







  function choose(option){


    if(currentQuestion.type==="multiple"){



      if(
        option==="其他" ||
        option==="Other"
      ){

        setOtherSelected(true)

      }



      if(selectedOptions.includes(option)){


        setSelectedOptions(

          selectedOptions.filter(
            item=>item!==option
          )

        )


      }else{


        setSelectedOptions([

          ...selectedOptions,

          option

        ])

      }


      return

    }





    if(
      option==="其他" ||
      option==="Other"
    ){

      setOtherSelected(true)

      return

    }



    goNext(option)

  }
  function submitMultiple(){


    let answers = [
      ...selectedOptions
    ]


    if(
      selectedOptions.includes("其他") ||
      selectedOptions.includes("Other")
    ){

      if(otherText.trim()===""){

        return

      }


      answers.push(otherText)

    }



    if(answers.length===0){

      return

    }



    goNext(
      answers.join(" / ")
    )


  }





  function goBack(){


    const ids = Object.keys(
      currentLanguage.questions
    )


    const index =
      ids.indexOf(currentId)



    if(index>0){


      setCurrentId(
        ids[index-1]
      )


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



        <div className="progress-text">

          {getProgress()}

        </div>


      </div>








      <div

        className={
          changing
          ?
          "chat-history fade"
          :
          "chat-history"
        }

      >





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



          {
            currentQuestion.hint &&


            <div className="question-hint">

              {currentQuestion.hint}

            </div>

          }


        </div>







        <div className="options">


          {

            currentQuestion.options.map(option=>(


              <OptionButton


                key={option}


                text={

                  selectedOptions.includes(option)

                  ?

                  "✓ " + option

                  :

                  option

                }


                onClick={

                  ()=>choose(option)

                }


              />


            ))

          }


        </div>







        {


          otherSelected &&


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


          </div>


        }







        {


          currentQuestion.type==="multiple"


          &&


          selectedOptions.length>0


          &&


          (

            !otherSelected

            ||

            otherText.trim()!==""


          )


          &&



          <button


            className="continue active"


            onClick={submitMultiple}


          >


            {

              currentId==="q4_good"

              ||

              currentId==="q4_bad"


              ?

              currentLanguage.submit


              :

              currentLanguage.continue


            }


          </button>


        }





      </div>


    </div>


  )


}


export default ChatFlow