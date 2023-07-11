import {defineField, defineType} from 'sanity'

export default skill({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
  {
    name: "tittle",
    tittle: "Tittle",
    description: "Title of the skill",
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

    name: "progress",
    tittle: "Progress",
    type: "number",
    description: "Progress of Skill from 0 to 100%",
    validation: (Rule) => Rule.min(0).max(100)


  },
  
  ]


})
