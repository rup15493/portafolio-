import {defineField, defineType} from 'sanity'

export default social({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [
  {
    name: "tittle",
    tittle: "Tittle",
    description: "plataform for social media ",
    type: "string"

  },
  ,{

    name: "url",
    tittle: "Url",
    type: "url",
    


  },
  
  ]


})
