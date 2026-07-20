const de = {

  questions: {

    q1: {
      id:"q1",
      type:"single",
      q:"Wie lange nutzen Sie Intent bereits?",
      options:[
        "Weniger als 7 Tage",
        "7-30 Tage",
        "Mehr als 30 Tage"
      ],
      next:"q2",
      hasOther:false
    },


    q2:{
      id:"q2",
      type:"multiple",
      q:"Welche Funktion von Intent ist für Sie am nützlichsten?",
      hint:"Mehrere Antworten möglich",
      options:[
        "Echtzeitübersetzung",
        "KI-Sprachklonen",
        "Direkte Übersetzung von Angesicht zu Angesicht",
        "Ausländische Freunde kennenlernen",
        "Andere"
      ],
      next:"q3",
      hasOther:true
    },


    q3:{
      id:"q3",
      type:"single",
      q:"Wie häufig nutzen Sie Intent?",
      options:[
        "Jeden Tag",
        "Ein paar Mal genutzt",
        "Kaum geöffnet"
      ],
      next:"q4",
      hasOther:false
    },


    q4:{
      id:"q4",
      type:"single",
      q:"Wie war Ihre Erfahrung mit Intent?",
      options:[
        "Sehr gut, ich werde es weiterhin nutzen",
        "Durchschnittlich",
        "Nicht sehr gut"
      ],
      next:{
        "Sehr gut, ich werde es weiterhin nutzen":"q4_good",
        "Durchschnittlich":"q4_bad",
        "Nicht sehr gut":"q4_bad"
      },
      hasOther:false
    },


    q4_good:{
      id:"q4_good",
      type:"multiple",
      q:"Welche Aspekte haben Ihnen gefallen?",
      hint:"Mehrere Antworten möglich",
      options:[
        "Genaue Übersetzung",
        "Einfache Bedienung",
        "Ausreichende Funktionen",
        "Andere"
      ],
      next:"end",
      hasOther:true
    },


    q4_bad:{
      id:"q4_bad",
      type:"multiple",
      q:"Welche Funktion hat Ihre Erwartungen nicht erfüllt?",
      hint:"Mehrere Antworten möglich",
      options:[
        "Die Übersetzungsqualität entsprach nicht den Erwartungen",
        "Die gewünschte Funktion wurde nicht gefunden",
        "Die Bedienung war komplizierter als erwartet",
        "Andere"
      ],
      next:"end",
      hasOther:true
    }

  },


  otherTitle:"Erzählen Sie uns mehr",

  placeholder:"Geben Sie Ihre Antwort ein...",

  continue:"Weiter",

  submit:"Absenden",

  thankTitle:"Vielen Dank für Ihre Teilnahme!",

  thankText:"Ihr Feedback hilft uns, Intent zu verbessern."

}


export default de
