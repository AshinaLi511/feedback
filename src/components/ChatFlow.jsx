import { useState } from "react"
import OptionButton from "./OptionButton"
import { supabase } from "../lib/supabase"

import zh from "../data/languages/zh"
import en from "../data/languages/en"


function ChatFlow({ language }) {


  const languageData = {
    zh,
    en
  }


  const currentLanguage = languageData[language]


  const [currentId, setCurrentId] = useState("q1")

  const [messages, setMessages] = useState([])

  const [finished, setFinished] = useState(false)

  const [otherSelected, setOtherSelected] = useState(false)

  const [otherText, setOtherText] = useState("")

  const [selectedOptions, setSelectedOptions] = useState([])



  const currentQuestion =
    currentLanguage.questions[currentId]



  // 保存数据到 Supabase

  async function saveFeedback(finalMessages) {


    const answers = {}


    finalMessages.forEach(item => {

      answers[item.id] = item.answer

    })


    const { error } = await supabase
      .from("feedbacks")
      .insert({

        language: language,

        q1: answers.q1 || "",

        q2: answers.q2 || "",

        q3: answers.q3 || "",

        q4: answers.q4 || ""

      })


    if(error){

      console.log(
        "Save error:",
        error
      )

    }

  }





  // 进入下一题

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


    let nextQuestion =
      currentQuestion.next



    // 分叉逻辑

    if(typeof nextQuestion === "object"){

      nextQuestion =
        nextQuestion[answer]

    }



    setOtherSelected(false)

    setOtherText("")

    setSelectedOptions([])



    // 完成

    if(nextQuestion === "end"){


      saveFeedback(newMessages)


      setTimeout(()=>{

        setFinished(true)

      },300)


      return

    }



    setTimeout(()=>{


      setCurrentId(nextQuestion)


    },300)

  }







  // 点击选项

  function choose(option){



    // 多选

    if(currentQuestion.type === "multiple"){



      if(
        option === "其他"
        ||
        option === "Other"
      ){

        setOtherSelected(true)

      }



      if(selectedOptions.includes(option)){


        setSelectedOptions(

          selectedOptions.filter(
            item=>item !== option
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




    // 单选 Other

    if(
      option === "其他"
      ||
      option === "Other"
    ){

      setOtherSelected(true)

      return

    }



    goNext(option)

  }







  // 提交多选

  function submitMultiple(){


    let answers = [
      ...selectedOptions
    ]


    if(
      selectedOptions.includes("其他")
      ||
      selectedOptions.includes("Other")
    ){


      if(
        otherText.trim() === ""
      ){

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







  // 提交Other

  function submitOther(){


    if(
      otherText.trim()===""
    ){

      return

    }


    goNext(otherText)

  }







  // 返回上一题

  function goBack(){


    const ids =
      Object.keys(
        currentLanguage.questions
      )


    const index =
      ids.indexOf(currentId)



    if(index > 0){


      setCurrentId(
        ids[index-1]
      )


      setMessages(
        messages.slice(0,-1)
      )

    }

  }







  // 完成页面

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
            [
              "q1",
              "q2",
              "q3",
              "q4"
            ].map(item=>(


              <span

                key={item}

                className={
                  item===currentId
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

              {
                currentLanguage.continue
              }


            </button>


          </div>



          :



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


        }






        {
          currentQuestion.type==="multiple"
          &&
          selectedOptions.length>0
          &&
          !otherSelected
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




        {
          currentQuestion.type==="multiple"
          &&
          otherSelected
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