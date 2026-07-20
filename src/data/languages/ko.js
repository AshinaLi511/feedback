const ko = {

  questions: {

    q1: {
      id:"q1",
      type:"single",
      q:"Intent를 사용한 지 얼마나 되었나요?",
      options:[
        "7일 미만",
        "7일~30일",
        "30일 이상"
      ],
      next:"q2",
      hasOther:false
    },


    q2:{
      id:"q2",
      type:"multiple",
      q:"현재 Intent에서 가장 유용한 기능은 무엇인가요?",
      hint:"복수 선택 가능",
      options:[
        "실시간 번역",
        "AI 음성 복제",
        "대면 번역",
        "외국인 친구 만들기",
        "기타"
      ],
      next:"q3",
      hasOther:true
    },


    q3:{
      id:"q3",
      type:"single",
      q:"Intent를 얼마나 자주 사용하시나요?",
      options:[
        "매일 사용",
        "몇 번 사용해 봄",
        "거의 열어보지 않음"
      ],
      next:"q4",
      hasOther:false
    },


    q4:{
      id:"q4",
      type:"single",
      q:"Intent 사용 경험은 어떠셨나요?",
      options:[
        "좋아요, 계속 사용할 예정입니다",
        "보통입니다",
        "좋지 않습니다"
      ],
      next:{
        "좋아요, 계속 사용할 예정입니다":"q4_good",
        "보통입니다":"q4_bad",
        "좋지 않습니다":"q4_bad"
      },
      hasOther:false
    },


    q4_good:{
      id:"q4_good",
      type:"multiple",
      q:"어떤 점이 만족스러웠나요?",
      hint:"복수 선택 가능",
      options:[
        "정확한 번역",
        "쉬운 사용법",
        "충분한 기능",
        "기타"
      ],
      next:"end",
      hasOther:true
    },


    q4_bad:{
      id:"q4_bad",
      type:"multiple",
      q:"기대와 달랐던 기능이 있나요?",
      hint:"복수 선택 가능",
      options:[
        "번역 품질이 기대에 못 미침",
        "원하는 기능을 찾지 못함",
        "사용법이 생각보다 복잡함",
        "기타"
      ],
      next:"end",
      hasOther:true
    }

  },


  otherTitle:"더 자세히 알려주세요",

  placeholder:"답변을 입력해주세요...",

  continue:"계속",

  submit:"제출",

  thankTitle:"참여해 주셔서 감사합니다!",

  thankText:"여러분의 피드백은 Intent 개선에 도움이 됩니다."

}


export default ko