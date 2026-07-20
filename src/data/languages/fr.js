const fr = {

  questions: {

    q1: {
      id:"q1",
      type:"single",
      q:"Depuis combien de temps utilisez-vous Intent ?",
      options:[
        "Moins de 7 jours",
        "7-30 jours",
        "Plus de 30 jours"
      ],
      next:"q2",
      hasOther:false
    },


    q2:{
      id:"q2",
      type:"multiple",
      q:"Quelle fonctionnalité d'Intent vous est la plus utile ?",
      hint:"Vous pouvez sélectionner plusieurs réponses",
      options:[
        "Traduction en temps réel",
        "Clonage vocal par IA",
        "Traduction en face à face",
        "Se faire des amis étrangers",
        "Autre"
      ],
      next:"q3",
      hasOther:true
    },


    q3:{
      id:"q3",
      type:"single",
      q:"À quelle fréquence utilisez-vous Intent ?",
      options:[
        "Tous les jours",
        "Je l'ai utilisé quelques fois",
        "Je l'ai rarement ouvert"
      ],
      next:"q4",
      hasOther:false
    },


    q4:{
      id:"q4",
      type:"single",
      q:"Quelle est votre expérience globale avec Intent ?",
      options:[
        "Très bien, je continuerai à l'utiliser",
        "Moyenne",
        "Pas très bonne"
      ],
      next:{
        "Très bien, je continuerai à l'utiliser":"q4_good",
        "Moyenne":"q4_bad",
        "Pas très bonne":"q4_bad"
      },
      hasOther:false
    },


    q4_good:{
      id:"q4_good",
      type:"multiple",
      q:"Quels aspects vous ont satisfait ?",
      hint:"Vous pouvez sélectionner plusieurs réponses",
      options:[
        "Traduction précise",
        "Facile à utiliser",
        "Fonctionnalités suffisantes",
        "Autre"
      ],
      next:"end",
      hasOther:true
    },


    q4_bad:{
      id:"q4_bad",
      type:"multiple",
      q:"Quelle fonctionnalité n'a pas répondu à vos attentes ?",
      hint:"Vous pouvez sélectionner plusieurs réponses",
      options:[
        "La qualité de traduction n'était pas suffisante",
        "Je n'ai pas trouvé la fonctionnalité souhaitée",
        "L'utilisation était plus complexe que prévu",
        "Autre"
      ],
      next:"end",
      hasOther:true
    }

  },


  otherTitle:"Dites-nous en plus",

  placeholder:"Saisissez votre réponse...",

  continue:"Continuer",

  submit:"Envoyer",

  thankTitle:"Merci pour votre participation !",

  thankText:"Vos commentaires nous aident à améliorer Intent."

}


export default fr