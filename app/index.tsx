import React from 'react'
import { Redirect } from 'expo-router'

const Welcome = () => {
  return <Redirect href={"/(auth)/welcome"} />
}

export default Welcome