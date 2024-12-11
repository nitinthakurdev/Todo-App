import { View, Text, ScrollView, Image, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons, image } from '@/utils/images';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  return (
    <ScrollView className='flex-1 bg-white p-5 '>
      <Text className='text-center text-3xl font-semibold '> Your Profile</Text>
      <View className='items-center justify-center py-5 '>
        <View className='h-28 w-28 rounded-full border-2  border-transparent bg-white shadow-md shadow-slate-900 items-center justify-center relative' >
          <Image source={image.wel} className='h-24 w-24' resizeMode='contain' />

          <View className='absolute bottom-3 -right-3 h-9 w-9 z-10 bg-white border-transparent shadow-lg  rounded-full border justify-center items-center'>
            <TouchableOpacity onPress={()=>setModalVisible(true)} >
              <Image source={icons.camara} className='h-7 w-7' />
            </TouchableOpacity>

          </View>
        </View>
        <Text className='text-xl font-medium pt-4' >Nitin</Text>
      </View>

      {/* modal */}
      <Modal
        animationType='slide'
        style={{ backgroundColor: "gray" }}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}

      >
        <View className='flex-1  items-center justify-center '>
          <View className='bg-slate-100 rounded-xl p-5 w-[90%] flex-row' ></View>
        </View>
        
      </Modal>
    </ScrollView>
  );
};

export default Profile;
