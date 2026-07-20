const pt = {

  questions: {

    q1: {
      id:"q1",
      type:"single",
      q:"Há quanto tempo você usa o Intent?",
      options:[
        "Menos de 7 dias",
        "7-30 dias",
        "Mais de 30 dias"
      ],
      next:"q2",
      hasOther:false
    },


    q2:{
      id:"q2",
      type:"multiple",
      q:"Qual é o recurso mais útil do Intent para você?",
      hint:"Você pode selecionar mais de uma opção",
      options:[
        "Tradução em tempo real",
        "Clonagem de voz por IA",
        "Tradução presencial",
        "Fazer amigos estrangeiros",
        "Outro"
      ],
      next:"q3",
      hasOther:true
    },


    q3:{
      id:"q3",
      type:"single",
      q:"Com que frequência você usa o Intent?",
      options:[
        "Uso todos os dias",
        "Usei algumas vezes",
        "Quase não abri"
      ],
      next:"q4",
      hasOther:false
    },


    q4:{
      id:"q4",
      type:"single",
      q:"Como foi sua experiência com o Intent?",
      options:[
        "Muito boa, continuarei usando",
        "Normal",
        "Não muito boa"
      ],
      next:{
        "Muito boa, continuarei usando":"q4_good",
        "Normal":"q4_bad",
        "Não muito boa":"q4_bad"
      },
      hasOther:false
    },


    q4_good:{
      id:"q4_good",
      type:"multiple",
      q:"Quais aspectos você gostou?",
      hint:"Você pode selecionar mais de uma opção",
      options:[
        "Tradução precisa",
        "Fácil de usar",
        "Recursos suficientes",
        "Outro"
      ],
      next:"end",
      hasOther:true
    },


    q4_bad:{
      id:"q4_bad",
      type:"multiple",
      q:"Qual recurso não correspondeu às suas expectativas?",
      hint:"Você pode selecionar mais de uma opção",
      options:[
        "A qualidade da tradução não atendeu às expectativas",
        "Não encontrei o recurso que queria",
        "Foi mais complicado do que eu esperava",
        "Outro"
      ],
      next:"end",
      hasOther:true
    }

  },


  otherTitle:"Conte-nos mais",

  placeholder:"Digite sua resposta...",

  continue:"Continuar",

  submit:"Enviar",

  thankTitle:"Obrigado pela participação!",

  thankText:"Seu feedback ajuda a melhorar o Intent."

}


export default pt