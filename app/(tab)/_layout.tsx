import React, { FC, ReactElement } from 'react'
import { Tabs } from 'expo-router'
import { Image, ImageSourcePropType, View } from 'react-native'
import { icons } from '@/utils/images'

const TabIcon:FC<{focused:boolean,sorce:ImageSourcePropType}> = ({focused,sorce}):ReactElement => (
  <View className={`flex flex-row justify-center item-center rounded-full ${focused ? 'bg-green-500' : ""} `} >
    <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-green-500" :""}`} >
      <Image source={sorce} tintColor="white" resizeMode='contain' className='w-7 h-7 '/>
    </View>
  </View>
)

const TabLayout = () => {
  return (
   <Tabs initialRouteName='Home' 
   screenOptions={{
    tabBarActiveTintColor:"white",
    tabBarInactiveTintColor:"white",
    tabBarShowLabel:false,
    tabBarHideOnKeyboard:true,
    tabBarStyle: {
      backgroundColor: "#333333",
      borderRadius: 50,
      paddingBottom: 25,
      marginHorizontal: 20,
      marginBottom: 10,
      height: 70,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center", 
      overflow: "hidden",
      position:"absolute",
    },
   
   }}
   >
    <Tabs.Screen name='Home' options={{title:"Home",headerShown:false,tabBarIcon:({focused})=>(
      <TabIcon focused={focused} sorce={icons.home} />
    )}} />
    <Tabs.Screen name='AddTask' options={{title:"Add task",headerShown:false,tabBarIcon:({focused})=>(
      <TabIcon focused={focused} sorce={icons.Add} />
    )}} />
    <Tabs.Screen name='Tasks' options={{title:"Tasks",headerShown:false,tabBarIcon:({focused})=>(
      <TabIcon focused={focused} sorce={icons.list} />
    )}} />
    <Tabs.Screen name='Profile' options={{title:"Profile",headerShown:false,tabBarIcon:({focused})=>(
      <TabIcon focused={focused} sorce={icons.profile} />
    )}} />
   </Tabs>
  )
}

export default TabLayout