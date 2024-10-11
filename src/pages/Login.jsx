import React from 'react'

import { LoginComponent } from '../componentes/LoginComponent'

import {postCollection} from "../../Database/post.js"
import {usersCollection} from "../../Database/users.js"

export const Login = () => {
  return (
   <LoginComponent/>
  )
}
