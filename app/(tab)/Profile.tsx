import { View, Text, ScrollView, Image, Modal, TouchableOpacity, TouchableWithoutFeedback, ImageSourcePropType, TouchableHighlight } from 'react-native';
import React, { FC, ReactElement, useState } from 'react';
import { icons, image } from '@/utils/images';
import * as ImagePicker from "expo-image-picker";
import { router } from 'expo-router';

interface Imageselector {
  image: ImageSourcePropType;
  text: string;
  onPress?: () => void
}



const ImageSelector: FC<Imageselector> = ({ image, text, onPress }): ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} className='p-2 h-20 w-20 bg-gray-200 rounded-xl items-center justify-center'>
      <Image source={image} className='h-10 w-10' resizeMode='contain' tintColor="#ffc93c" />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const ProfileButtons: FC<Imageselector> = ({image,text,onPress}): ReactElement => {
  return (
    <TouchableHighlight onPress={onPress} className='w-full bg-gray-100 rounded-lg py-3 px-2 ' >
      <View className='flex-row gap-3 items-center '>
        <Image source={image} className='h-7 w-7' resizeMode='contain' tintColor={"gray"} />
        <Text className='text-lg '>{text}</Text>
      </View>
    </TouchableHighlight>
  )
}

const Profile: FC = (): ReactElement => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [img, setImg] = useState<string | null>(null)
  const uploadImage = async (mode?: string) => {
    try {
      let result
      if (mode === 'gallery') {
        await ImagePicker.requestMediaLibraryPermissionsAsync()
        result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], allowsEditing: true, aspect: [1, 1], quality: 1 })
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({ cameraType: ImagePicker.CameraType.front, allowsEditing: true, aspect: [1, 1], quality: 1 });

      }
      if (!result.canceled) {
        setImg(result.assets[0].uri);
      };

    } catch (error) {
      console.log(error);
      setModalVisible(false);
    }
  }
  return (
    <ScrollView className='flex-1 bg-white p-5 '>
      <Text className='text-center text-3xl font-semibold '> Your Profile</Text>
      <View className='items-center justify-center py-5 '>
        <View className='h-28 w-28 rounded-full border-2  border-transparent bg-white shadow-md shadow-slate-900 items-center justify-center relative' >
          <Image source={img ? { uri: img } : image.wel} className='h-24 w-24 rounded-full' resizeMode='contain' />
          <View className='absolute bottom-3 -right-3 h-9 w-9 z-10 bg-white border-transparent shadow-lg  rounded-full border justify-center items-center'>
            <TouchableOpacity onPress={() => setModalVisible(true)} >
              <Image source={icons.camara} className='h-7 w-7' resizeMode='contain' tintColor="gray" />
            </TouchableOpacity>

          </View>
        </View>
        <Text className='text-xl font-medium pt-4' >Nitin</Text>
      </View>


      <View className='py-5' >
        <Text className='text-xl font-medium pb-2'>Personal Information</Text>
        <ProfileButtons image={icons.profile} text='Profile Detail' onPress={()=>router.replace("/(stack)/profiledetail")} />
      </View>



      {/* modal */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}

      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View className="flex-1 items-center bg-[rgba(86,85,85,0.5)] justify-center">
            <View className='bg-white rounded-xl p-5 w-[90%] items-center justify-center py-5'>

              <Text className='text-center text-xl font-medium pb-5' >Profile Photo</Text>
              <View className=" flex-row gap-10">
                <ImageSelector image={icons.camara} text={"Camera"} onPress={uploadImage} />
                <ImageSelector image={icons.file} text={" Files "} onPress={() => uploadImage("gallery")} />
                <ImageSelector image={icons.bin} text={"Remove"} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

      </Modal>
    </ScrollView>
  );
};

export default Profile;
