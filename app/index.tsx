import React from 'react'
import { Redirect } from 'expo-router'

const Welcome = () => {
  return <Redirect href={"/(tab)/Home"} />
}

export default Welcome