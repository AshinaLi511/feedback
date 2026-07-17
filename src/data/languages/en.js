const en = {

  questions: {

    q1:{
      id:"q1",
      type:"single",
      q:"How long have you been using Intent?",
      options:[
        "Less than 7 days",
        "7-30 days",
        "More than 30 days"
      ],
      next:"q2",
      hasOther:false
    },


    q2:{
      id:"q2",
      type:"single",
      q:"What is the most useful feature of Intent for you?",
      options:[
        "Real-time translation",
        "AI voice cloning",
        "Face-to-face translation",
        "Making foreign friends",
        "Other"
      ],
      next:"q3",
      hasOther:true
    },


    q3:{
      id:"q3",
      type:"single",
      q:"How often do you use Intent?",
      options:[
        "Every day",
        "Used it a few times",
        "Barely opened it"
      ],
      next:"q4",
      hasOther:false
    },


    q4:{
      id:"q4",
      type:"single",
      q:"How was your overall experience with Intent?",
      options:[
        "Great, I will continue using it",
        "Average",
        "Not very good"
      ],

      next:{
        "Great, I will continue using it":"q4_good",
        "Average":"q4_bad",
        "Not very good":"q4_bad"
      },

      hasOther:false

    },


    q4_good:{
      id:"q4_good",
      type:"multiple",
      q:"What did you like about Intent?",
      options:[
        "Accurate translation",
        "Easy to use",
        "Features are enough",
        "Other"
      ],
      next:"end",
      hasOther:true
    },


    q4_bad:{
      id:"q4_bad",
      type:"multiple",
      q:"Which features did not meet your expectations?",
      options:[
        "Translation quality was not as expected",
        "Could not find the feature I wanted",
        "More complicated than expected",
        "No, everything matched my expectations",
        "Other"
      ],
      next:"end",
      hasOther:true
    }

  },


  otherTitle:"Tell us more",

  placeholder:"Please enter your answer...",


  continue:"Continue",

  submit:"Submit",


  thankTitle:"Thank you!",

  thankText:"Your feedback helps us improve Intent."

}


export default en