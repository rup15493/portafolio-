

import { title } from 'process'
import {defineField, defineType} from 'sanity'

export default pageInfo({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
  {
    name: "name",
    tittle: "name",
    type: "string"

  },
  {
    name: "role",
    tittle: "Role",
    type: "string",




  },{

    name: "heroeImage",
    tittle: "Image",
    type: "image",
    options: {
      hotspot: true,
    }


  },{

    name: "backgroundInformation",
    tittle: "BackgroundInformation",
    type: "image",


  },{

    name: "profilePic",
    tittle: "ProfilePic",
    type: "image",
    options: {
      hotspot: true,
    }



  },
  {
    name: "phoneNumber",
    tittle: "PhoneNumber",
    type: "string",




  },  {
    name: "email",
    tittle: "Email",
    type: "string",




  },  {
    name: "adress",
    tittle: "Adress",
    type: "string",




  },   {
    name: "socials",
    tittle: "Socials",
    type: "array",
    of: [{type:"reference", to: {type: "social"} }],




  }

  ]


})

