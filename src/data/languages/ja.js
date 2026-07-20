const ja = {

  questions: {

    q1: {
      id:"q1",
      type:"single",
      q:"Intentをどのくらい利用していますか？",
      options:[
        "7日未満",
        "7日〜30日",
        "30日以上"
      ],
      next:"q2",
      hasOther:false
    },


    q2:{
      id:"q2",
      type:"multiple",
      q:"現在、Intentで最も役立っている機能は何ですか？",
      hint:"複数選択可",
      options:[
        "リアルタイム翻訳",
        "AI音声クローン",
        "対面翻訳",
        "外国人の友達作り",
        "その他"
      ],
      next:"q3",
      hasOther:true
    },


    q3:{
      id:"q3",
      type:"single",
      q:"Intentをどのくらい使いますか？",
      options:[
        "毎日使う",
        "数回使った",
        "ほとんど開いていない"
      ],
      next:"q4",
      hasOther:false
    },


    q4:{
      id:"q4",
      type:"single",
      q:"Intentの利用体験はいかがですか？",
      options:[
        "良い、今後も使いたい",
        "普通",
        "あまり良くない"
      ],
      next:{
        "良い、今後も使いたい":"q4_good",
        "普通":"q4_bad",
        "あまり良くない":"q4_bad"
      },
      hasOther:false
    },


    q4_good:{
      id:"q4_good",
      type:"multiple",
      q:"どの点に満足しましたか？",
      hint:"複数選択可",
      options:[
        "翻訳が正確",
        "操作が簡単",
        "機能が十分",
        "その他"
      ],
      next:"end",
      hasOther:true
    },


    q4_bad:{
      id:"q4_bad",
      type:"multiple",
      q:"期待と違った機能はありますか？",
      hint:"複数選択可",
      options:[
        "翻訳品質が期待以下",
        "欲しい機能が見つからない",
        "操作が想像より複雑",
        "その他"
      ],
      next:"end",
      hasOther:true
    }

  },


  otherTitle:"詳しく教えてください",

  placeholder:"回答を入力してください...",

  continue:"続ける",

  submit:"送信",

  thankTitle:"ご協力ありがとうございました！",

  thankText:"あなたのフィードバックはIntentの改善に役立ちます。"

}


export default ja