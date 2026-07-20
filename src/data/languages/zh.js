const zh = {

  questions: {


    q1: {

      id:"q1",

      type:"single",

      q:"您使用 Intent 多久了？",

      options:[

        "少于7天",

        "7-30天",

        "30天以上"

      ],

      next:"q2",

      hasOther:false

    },



    q2: {

      id:"q2",

      type:"multiple",

      q:"目前 Intent 对您最有用的是什么？",

      hint:"可多选",

      options:[

        "实时翻译",

        "AI语音克隆",

        "面对面翻译",

        "认识外国朋友",

        "其他"

      ],

      next:"q3",

      hasOther:true

    },



    q3: {

      id:"q3",

      type:"single",

      q:"您用 Intent 用得多吗？",

      options:[

        "天天用",

        "用过几次",

        "基本没打开"

      ],

      next:"q4",

      hasOther:false

    },



    q4: {

      id:"q4",

      type:"single",

      q:"使用 Intent 的体验如何？",

      options:[

        "挺好，会继续使用",

        "一般",

        "不太好"

      ],

      next:{


        "挺好，会继续使用":"q4_good",


        "一般":"q4_bad",


        "不太好":"q4_bad"


      },

      hasOther:false

    },



    q4_good:{


      id:"q4_good",


      type:"multiple",


      q:"哪些地方让您满意？",


      hint:"可多选",


      options:[

        "翻译准",

        "操作简单",

        "功能够用",

        "其他"

      ],


      next:"end",


      hasOther:true


    },



    q4_bad:{


      id:"q4_bad",


      type:"multiple",


      q:"有没有哪个功能，用起来和您期待的不太一样？",


      hint:"可多选",


      options:[

        "翻译效果没达到预期",

        "想用的功能没找到",

        "操作比想象中复杂",

        "其他"

      ],


      next:"end",


      hasOther:true


    }


  },



  otherTitle:"请告诉我们更多",


  placeholder:"请输入您的回答...",


  continue:"继续",


  submit:"提交",


  thankTitle:"感谢您的参与！",


  thankText:"您的反馈将帮助我们不断改进 Intent。"


}


export default zh