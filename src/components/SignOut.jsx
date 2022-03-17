import React from 'react'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'

const SignOut = () => {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>SignOut</Button>
    </div>
  )
}

export default SignOut