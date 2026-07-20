const es = {

  questions: {

    q1: {
      id:"q1",
      type:"single",
      q:"¿Cuánto tiempo llevas usando Intent?",
      options:[
        "Menos de 7 días",
        "7-30 días",
        "Más de 30 días"
      ],
      next:"q2",
      hasOther:false
    },


    q2:{
      id:"q2",
      type:"multiple",
      q:"¿Cuál es la función más útil de Intent para ti?",
      hint:"Puedes seleccionar varias opciones",
      options:[
        "Traducción en tiempo real",
        "Clonación de voz con IA",
        "Traducción cara a cara",
        "Hacer amigos extranjeros",
        "Otro"
      ],
      next:"q3",
      hasOther:true
    },


    q3:{
      id:"q3",
      type:"single",
      q:"¿Con qué frecuencia usas Intent?",
      options:[
        "Lo uso todos los días",
        "Lo he usado algunas veces",
        "Casi no lo he abierto"
      ],
      next:"q4",
      hasOther:false
    },


    q4:{
      id:"q4",
      type:"single",
      q:"¿Cómo ha sido tu experiencia con Intent?",
      options:[
        "Muy buena, seguiré usándolo",
        "Normal",
        "No muy buena"
      ],
      next:{
        "Muy buena, seguiré usándolo":"q4_good",
        "Normal":"q4_bad",
        "No muy buena":"q4_bad"
      },
      hasOther:false
    },


    q4_good:{
      id:"q4_good",
      type:"multiple",
      q:"¿Qué aspectos te gustaron?",
      hint:"Puedes seleccionar varias opciones",
      options:[
        "Traducción precisa",
        "Fácil de usar",
        "Funciones suficientes",
        "Otro"
      ],
      next:"end",
      hasOther:true
    },


    q4_bad:{
      id:"q4_bad",
      type:"multiple",
      q:"¿Qué función no cumplió tus expectativas?",
      hint:"Puedes seleccionar varias opciones",
      options:[
        "La calidad de traducción no fue la esperada",
        "No encontré la función que quería",
        "Fue más complicado de usar de lo esperado",
        "Otro"
      ],
      next:"end",
      hasOther:true
    }

  },


  otherTitle:"Cuéntanos más",

  placeholder:"Escribe tu respuesta...",

  continue:"Continuar",

  submit:"Enviar",

  thankTitle:"¡Gracias por participar!",

  thankText:"Tus comentarios nos ayudan a mejorar Intent."

}


export default es