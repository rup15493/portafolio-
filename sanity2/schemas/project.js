

import { title } from 'process'
import {defineField, defineType} from 'sanity'

export default project({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
  {
    name: "tittle",
    tittle: "Tittle",
    description: "Title of the project",
    type: "string"

  },
  {

    name: "image",
    tittle: "Image",
    type: "image",
    options: {
      hotspot: true,
    }


  },{

    name: "summary",
    tittle: "Summary",
    type: "text",


  },
  {
    name: "linktobuild",
    tittle: "LinktoBuild",
    type: "url",





  }


  ,     {
    name: "technologies",
    tittle: "Technologies",
    type: "array",
    of: [{type:"reference", to: {type: "skill"} }],




  }, 
  ]


})
