import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Tasks = () => {
  const tasks: any = [{ title: "car wash", description: "this is my car and i want to wash ", state: "pending" }];
  return (
    <FlatList
      className='bg-white pb-10'
      data={tasks}
      renderItem={({ item }) => (
        <View className='shadow-lg px-5 relative shadow-black mx-5 border border-transparent bg-white  py-3  rounded-lg ' >
          <Text className='text-lg font-medium'>{item.title}</Text>
          <Text className='text-slate-600'>{item.description.slice(0, 20)}...</Text>
          <Text className='absolute right-5 top-[50%] px-4 py-2 bg-yellow-300 rounded-full' >{item.state}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()} // Use unique IDs if available
      ListHeaderComponent={() => (
        <Text className="text-3xl text-center py-10 font-bold">Tasks</Text>
      )}
      ListEmptyComponent={() => (
        <Text className="text-center text-xl  py-10 text-gray-500">No tasks available</Text>
      )}
      ListFooterComponent={() => (
        <View className='my-20' ></View>
      )}
    />

  )
}

export default Tasks