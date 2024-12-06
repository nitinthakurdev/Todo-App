import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
   <Tabs>
    <Tabs.Screen name='Home' />
    <Tabs.Screen name='AddTask' />
    <Tabs.Screen name='Tasks' />
    <Tabs.Screen name='Profile' />
   </Tabs>
  )
}

export default TabLayout