

import { title } from 'process'
import {defineField, defineType} from 'sanity'

export default experience({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
  {
    name: "jobTittle",
    tittle: "Jobtittle",
    type: "string"

  },
  {

    name: "companyImage",
    tittle: "companyImage",
    type: "image",
    options: {
      hotspot: true,
    }


  },{

    name: "company",
    tittle: "Company",
    type: "string",


  },,
  {
    name: "dateStarted",
    tittle: "DateStarted",
    type: "date",




  },  {
    name: "isCurrenlyWorkingHere",
    tittle: "IsCurrenlyWorkingHere",
    type: "boolean",




  },     {
    name: "technologies",
    tittle: "Technologies",
    type: "array",
    of: [{type:"reference", to: {type: "skill"} }],




  },     {
    name: "points",
    tittle: "Points",
    type: "array",
    of: [{type: "string" }],

  }
  ]


})
