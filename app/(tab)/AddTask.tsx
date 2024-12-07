import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import InputField from '../components/Input'

const AddTask = () => {
  const [value,setValue] = useState("")
  return (
    <ScrollView className='flex-1 bg-white '>
      <Text className='text-2xl text-center py-10 font-bold ' >Add New Task</Text>
      <View className='px-7'>
        <InputField label='Title' value={value} onChange={(e)=>setValue(e)} />
        <InputField label='Should be completed Time '  value={value} numberOfLines={4} />
      </View>
    </ScrollView>
  )
}

export default AddTask